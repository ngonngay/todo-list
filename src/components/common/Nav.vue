<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
//@ts-ignore
import { useStore } from 'vuex';

const $route = useRoute();
const $router = useRouter();

const menu = [
  {
    id: 'todo',
    label: 'Todo',
    url: '/to-do',
    state: 'open'
  },
  {
    id: 'inProgress',
    label: 'In Progress',
    url: '/in-progress',
    state: 'inprogress'
  },
  {
    id: 'completed',
    label: 'Completed',
    url: '/completed',
    state: 'completed'
  }
];

const $store = useStore();
const count: any = computed(() => {
  return {
    open: $store.getters.getOpen,
    inprogress: $store.getters.getInprogress,
    completed: $store.getters.getCompleted
  };
});

const doLogout = () => {
  alert('Logout Successfully');
};
</script>
<template>
  <nav class="vw-100 navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand cursor-pointer" @click="$router.push('/')">Stark</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="item in menu"
            class="nav-item"
            :class="{ active: $route.path === item.url }"
            @click="$router.push(item.url)">
            <a class="nav-link">
              {{ item.label }}
              <span v-if="count[item.state].length" class="badge text-bg-danger">
                {{ count[item.state].length }}
              </span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page">{{ $store.getters.getUserName }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="doLogout()">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.navbar {
  background-color: #222222 !important;
  padding: 0;
}
.nav-item {
  &.active,
  &:hover {
    background-color: #000;
    color: #fff;
    .nav-link {
      color: #fff;
    }
  }
}
.nav-link,
.navbar-brand {
  width: 115pt;
  height: 40pt;
  color: #999999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-link {
  font-size: 12pt;
}

.navbar-brand {
  font-size: 14pt;
  margin: 0;
}
.badge {
  margin-left: 12px;
  border-radius: 1rem;
}
.navbar-toggler {
  background-color: white;
}

@media (max-width: 990px) {
  .navbar-brand {
    width: unset;
  }
}
</style>
