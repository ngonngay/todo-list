<script setup>
//@ts-ignore
import { useStore } from 'vuex';

const $store = useStore();
$store.dispatch('getUserName');
$store.dispatch('getNews');
$store.dispatch('getAll');
</script>

<template>
  <router-view />
</template>

