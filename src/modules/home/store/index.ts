import store from '@/store';
import { getModule } from 'vuex-module-decorators';
import { HomeStoreModule } from './module';

export const HomeModule = getModule(HomeStoreModule, store);
