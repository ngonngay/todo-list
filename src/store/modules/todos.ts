import $api from '@/api';

type ITodo = {
  id: string;
  thumbnail?: string;
  tilte: string;
  description: string;
  state: 'open' | 'inprogress' | 'completed';
};

type INews = {
  id: string;
  thumbnail?: string;
  tilte: string;
  description: string;
};
type State = {
  busy: boolean;
  error?: any;
  todos: ITodo[];
  news: INews[];
};
const state: State = {
  busy: false,
  error: null,
  todos: [],
  news: []
};

const getters = {
  getOpen: (state: State) => state.todos.filter((t) => t.state === 'open'),
  getInprogress: (state: State) => state.todos.filter((t) => t.state === 'inprogress'),
  getCompleted: (state: State) => state.todos.filter((t) => t.state === 'completed'),
  getNews: (state: State) => state.news,
  getTodos: (state: State) => state.todos
};

const mutations = {
  load(state: State, data: ITodo[]) {
    state.todos = data;
    state.busy = false;
  },
  getNews(state: State, data: any) {
    state.news = data;
    state.busy = false;
  },
  add(state: State, data: ITodo) {
    state.todos.push(data);
  },
  update(state: State, data: ITodo) {
    const tmp = [...state.todos];
    const i = tmp.findIndex((el) => el.id == data.id);
    if (i > -1) {
      tmp[i] = data;
    }
    state.todos = [...tmp];
    state.busy = false;
  },
  remove(state: State, data: ITodo) {
    const tmp = [...state.todos];
    const i = tmp.findIndex((el) => el.id == data.id);
    if (i > -1) {
      tmp.splice(i, 1);
    }
    state.todos = [...tmp];
    state.busy = false;
  },
  busy(state: State) {
    state.busy = true;
  }
};

const actions = {
  getAll: ({ commit }: any) => {
    commit('busy');
    new Promise(async (resolve) => {
      $api.todo.getAll().then((data) => {
        commit('load', data);
        resolve(true);
      });
    });
  },
  editTodo: ({ commit }: any, data: any) => {
    commit('busy');
    commit('update', data);
  },
  addTodo: ({ commit }: any, data: any) => {
    commit('busy');
    commit('add', data);
  },
  remove: ({ commit }: any, data: any) => {
    commit('busy');
    commit('remove', data);
  },
  getNews: ({ commit }: any) => {
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
