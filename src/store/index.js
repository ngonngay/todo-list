//@ts-ignore
import { createStore } from 'vuex';
import todos from './modules/todos';
import user from './modules/user';
export const store = createStore({
  modules: {
    todos,
    user
  }
});
