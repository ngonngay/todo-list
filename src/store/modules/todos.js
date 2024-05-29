import $api from '@/api';

const state = {
  busy: false,
  error: null,
  todos: [],
  news: []
};

const getters = {
  getOpen: (state) => state.todos.filter((t) => t.state === 'open'),
  getInprogress: (state) => state.todos.filter((t) => t.state === 'inprogress'),
  getCompleted: (state) => state.todos.filter((t) => t.state === 'completed'),
  getNews: (state) => state.news,
  getTodos: (state) => state.todos
};

const mutations = {
  load(state, data) {
    state.todos = data;
    state.busy = false;
  },
  getNews(state, data) {
    state.news = data;
    state.busy = false;
  },
  add(state, data) {
    state.todos.push(data);
  },
  update(state, data) {
    const tmp = [...state.todos];
    const i = tmp.findIndex((el) => el.id == data.id);
    if (i > -1) {
      tmp[i] = data;
    }
    state.todos = [...tmp];
    state.busy = false;
  },
  remove(state, data) {
    const tmp = [...state.todos];
    const i = tmp.findIndex((el) => el.id == data.id);
    if (i > -1) {
      tmp.splice(i, 1);
    }
    state.todos = [...tmp];
    state.busy = false;
  },
  busy(state) {
    state.busy = true;
  }
};

const actions = {
  getAll: ({ commit }) => {
    commit('busy');
    new Promise(async (resolve) => {
      $api.todo.getAll().then((data) => {
        commit('load', data);
        resolve(true);
      });
    });
  },
  editTodo: ({ commit }, data) => {
    commit('busy');
    commit('update', data);
  },
  addTodo: ({ commit }, data) => {
    commit('busy');
    commit('add', data);
  },
  remove: ({ commit }, data) => {
    commit('busy');
    commit('remove', data);
  },
  getNews: ({ commit }) => {
    commit('busy');
    new Promise(async (resolve) => {
      $api.news.getNews().then((data) => {
        commit('getNews', data);
        resolve(true);
      });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
