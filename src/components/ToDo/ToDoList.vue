<script setup lang="ts">
// import { computed } from 'vue';
import { computed, ref } from 'vue';
import ToDoItem from './ToDoItem.vue';
import Form from '@/components/common/Modal.vue';
//@ts-ignore
import { useStore } from 'vuex';
const $store = useStore();
const props = defineProps(['state']);
const todosList = computed(() =>
  $store.state.todos.todos.filter((t: any) => t.state == props.state)
);

let openForm = ref<boolean>(false);
const target = ref<any>({});

function onAddNew() {
  target.value = {};
  openForm.value = !openForm.value;
}

function onEdit(item: any) {
  target.value = item;
  openForm.value = !openForm.value;
}
function onStart(item: any) {
  $store.dispatch('editTodo', {
    ...item,
    state: item.state === 'open' ? 'inprogress' : 'completed'
  });
}
</script>
<template>
  <Form
    v-if="openForm"
    :editing="openForm"
    :todo="target"
    @close="
      () => {
        openForm = !openForm;
      }
    " />
  <div class="d-flex justify-content-between align-items-center">
    <div class="label">Todo</div>
    <button type="button" class="btn btn-primary" @click="onAddNew()">Add Task</button>
  </div>
  <div class="row">
    <h3>Todo</h3>
    <template v-for="t in todosList">
      <div class="col-12 col-md-4 col-sm-6 col-lg-3 py-2">
        <ToDoItem
          :todo="t"
          @next="onStart(t)"
          @edit="onEdit(t)"
          @remove="$store.dispatch('remove', t)" />
      </div>
    </template>
  </div>
</template>
