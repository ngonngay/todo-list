import $api from '@/api';

const state = {
  busy: false,
  error: null,
  user: ''
};

const getters = {
  getUserName: (state) => {
    return state.user;
  }
};

const mutations = {
  set(state, data) {
    state.user = data;
    state.busy = false;
  },
  busy(state) {
    state.busy = true;
  }
};

const actions = {
  getUserName: ({ commit }) => {
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
