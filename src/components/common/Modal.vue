<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
//@ts-ignore
import { useStore } from 'vuex';
const props = defineProps(['todo', 'editing']);
const $store = useStore();

const title = ref<string>('');
const id = ref<string>();
const description = ref<string>('');

onBeforeMount(() => {
  id.value = props.todo.id;
  title.value = props.todo.title;
  description.value = props.todo.description;
});
const emit = defineEmits<{ (e: 'close'): void }>();

function doSubmit() {
  if (id.value) {
    $store.dispatch('editTodo',{
      ...props.todo,
      title: title.value,
      description: description.value
    });
  } else {
    $store.dispatch('addTodo',{
      id: Math.floor(Math.random() * 1000),
      title: title.value,
      description: description.value,
      createdAt: new Date().toLocaleDateString('en-US'),
      thumbnail: 'https://fakeimg.pl/320x200/',
      state: 'open'
    });
  }
  emit('close');
  title.value = '';
  description.value = '';
}
</script>

<template>
  <div
    class="modal fade"
    :class="{ 'show d-block': props.editing }"
    id="exampleModal"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <form>
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Task Form</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3 needs-validation" novalidate>
              <div class="col-12">
                <label for="validationCustom01" class="form-label">Title</label>
                <input v-model="title" type="text" class="form-control" />
              </div>
              <div class="col-12">
                <label for="validationCustom02" class="form-label">Description</label>
                <textarea v-model="description" type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="emit('close')">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="doSubmit()">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div v-if="props.editing" class="modal-backdrop fade show"></div>
</template>