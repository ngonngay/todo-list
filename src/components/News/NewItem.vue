<script lang="ts" setup>
const props = defineProps(['new', 'index']);
</script>

<template>
  <div class="card mb-5 w-100 border-0">
    <div class="row g-0 flex" :class="[index % 2 ? 'flex-row' : 'flex-row-reverse']">
      <div class="col-md-4">
        <img
          v-if="!!props.new.thumbnail"
          :src="props.new.thumbnail"
          :alt="props.new.thumbnail"
          class="img-fluid w-100" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ props.new.title }}</h5>
          <p class="card-text" :title="props.new.description">
            {{ props.new.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
