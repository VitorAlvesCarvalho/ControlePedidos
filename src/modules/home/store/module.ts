import { Module, VuexModule } from 'vuex-module-decorators';
import { MockTables } from '@/modules/home/__mocks__';

@Module({
  namespaced: true
})
export class HomeStoreModule extends VuexModule {
  public get tables() {
    return MockTables;
  }
}
