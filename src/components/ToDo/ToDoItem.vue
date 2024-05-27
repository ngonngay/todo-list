<script setup lang="ts">
const emit = defineEmits<{ (e: 'next'): void; (e: 'edit'): void; (e: 'remove'): void }>();
const props = defineProps(['todo']);
const label: any = {
  open: 'Start',
  inprogress: 'Complete'
};
</script>
<template>
  <div v-if="!!props.todo.id" class="card w-100 h-100" style="max-width: 400px;">
    <img
      v-if="!!props.todo.thumbnail"
      :src="props.todo.thumbnail"
      :alt="props.todo.thumbnail"
      class="card-img-top" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ props.todo.title }}</h5>
      <p class="card-text">
        {{ props.todo.createdAt }}
      </p>
      <p class="card-text flex-grow-1 text-truncate-4" :title="props.todo.description">
        {{ props.todo.description }}
      </p>
      <div class="d-flex justify-between items-center gap-2">
        <a
          v-if="props.todo.state !== 'completed'"
          class="btn btn-primary w-100"
          @click="emit('next')">
          {{ label[props.todo.state] }}
        </a>
        <a class="btn btn-warning w-100" @click="emit('edit')"> Edit </a>
        <a class="btn btn-outline-secondary w-100" @click="emit('remove')"> Remove </a>
      </div>
    </div>
  </div>
</template>
