<script setup>
import ToDoList from '@/components/ToDo/ToDoList.vue';
import News from "@/components/News/News.vue";
import { useStore } from 'vuex';
const $store = useStore();
const news =$store.getters.getNews;

</script>

<template>
  <div class="p-5">
    <div class="mt-4">
      <ToDoList state="inprogress"/>
      <News class="mt-5" :news="news" />
    </div>
  </div>
</template>

<style scoped></style>
