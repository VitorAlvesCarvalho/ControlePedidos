import { Module, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true,
  name: 'HomeModule'
})
export class HomeStoreModule extends VuexModule {}
