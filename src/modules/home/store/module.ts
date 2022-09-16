import { Action, Module, VuexModule } from 'vuex-module-decorators';
import { MockTables, MockProducts } from '@/modules/home/__mocks__';

@Module({
  namespaced: true
})
export class HomeStoreModule extends VuexModule {
  public get tables() {
    return MockTables;
  }

  public get products() {
    return MockProducts;
  }

  @Action
  public setValueOrdered(payload: any) {
    MockTables.forEach((item) => {
      if (item.id === payload.table.id) {
        item.valueOrdered += payload.orderedValue;
        item.totalRemaining = item.valueOrdered - item.payments;
        item.ordered = item.ordered.concat(payload.productsAdd);
      }
    });
  }

  @Action
  public setValuePayment(payload: any) {
    MockTables.forEach((item) => {
      if (item.id === payload.table.id) {
        item.payments += payload.paymentValue;
        item.totalRemaining = item.valueOrdered - item.payments;
      }
    });
  }
}
