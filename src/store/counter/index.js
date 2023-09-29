import { defineStore } from 'pinia';
import plugins from '@/store/plugins/persistState';
import state from './state';
import * as getters from './getters';
import actions from './actions';

const storeName = 'counter';
const Store = defineStore(storeName, {
  state,
  actions,
  getters,
  persist: plugins.persistPlugin(storeName),
});

export default Store;
