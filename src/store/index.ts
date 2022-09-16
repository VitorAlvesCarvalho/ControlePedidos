import Vue from 'vue';
import Vuex from 'vuex';
import { HomeStoreModule } from '@/modules/home/store/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { HomeModule: HomeStoreModule }
});
