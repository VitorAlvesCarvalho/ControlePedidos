import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
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

  @Mutation
  public setValueOrdered({ table, payload }) {
    table.valueOrdered += payload.totalValue;
    table.totalRemaining = table.valueOrdered - table.payments;
    table.ordered = table.ordered.concat(payload.productsAdd);
  }

  @Mutation
  public setValuePayment({ table, payload }) {
    table.payments += Number(payload.paymentValue);

    table.totalRemaining = Number(
      (table.valueOrdered - table.payments).toFixed(2)
    );
  }

  @Action
  public tableSelect(id: string): IItemTable | undefined {
    return MockTables.find((item) => item.id === id);
  }

  @Action
  public async setOrdered(payload: IConfirmOrdered) {
    const table = await this.context.dispatch('tableSelect', payload.table.id);

    if (table) {
      this.context.commit('setValueOrdered', { table, payload });
    }
  }

  @Action
  public async setPayment(payload: IConfirmPayment) {
    const table = await this.context.dispatch('tableSelect', payload.table.id);

    if (table) {
      this.context.commit('setValuePayment', { table, payload });
    }
  }
}
