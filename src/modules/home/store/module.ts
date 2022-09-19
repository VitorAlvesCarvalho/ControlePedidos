import { Action, Module, VuexModule } from 'vuex-module-decorators';
import { MockTables, MockProducts } from '@/modules/home/__mocks__';
import {
  IConfirmOrdered,
  IConfirmPayment,
  IProductList,
  IItemTable
} from '@/modules/home/types';

@Module({
  namespaced: true
})
export class HomeStoreModule extends VuexModule {
  public get tables(): IItemTable[] {
    return MockTables;
  }

  public get products(): IProductList[] {
    return MockProducts;
  }

  @Action
  public setValueOrdered(payload: IConfirmOrdered) {
    MockTables.forEach((item) => {
      if (!payload.table) return;

      if (item.id === payload.table.id) {
        item.valueOrdered += payload.totalValue;
        item.totalRemaining = item.valueOrdered - item.payments;
        item.ordered = item.ordered.concat(payload.productsAdd);
      }
    });
  }

  @Action
  public setValuePayment(payload: IConfirmPayment) {
    MockTables.forEach((item) => {
      if (item.id === payload.table.id) {
        item.payments += payload.paymentValue;
        item.totalRemaining = item.valueOrdered - item.payments;
      }
    });
  }
}
