<script lang="ts" setup>
import NewItem from './NewItem.vue';
const props = defineProps(['news']);
</script>

<template>
  <div>
    <h3>News</h3>
    <div class="row">
      <div v-for="(item, index) in props.news" class="col-12">
        <NewItem :new="item" :index="index" />
      </div>
    </div>
  </div>
</template>
