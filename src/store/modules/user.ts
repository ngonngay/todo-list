import $api from '@/api';

type State = {
  busy: boolean;
  error?: any;
  user: string;
};
const state: State = {
  busy: false,
  error: null,
  user: ''
};

const getters = {
  getUserName: (state: State) => {
    return state.user;
  }
};

const mutations = {
  set(state: State, data: string) {
    state.user = data;
    state.busy = false;
  },
  busy(state: State) {
    state.busy = true;
  }
};

const actions = {
  getUserName: ({ commit }: any) => {
    commit('busy');
    new Promise(async (resolve) => {
      $api.user.getUserName().then((data) => {
        commit('set', data);
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
