<template>
  <div class="card">
    <section class="card__infos">
      <section class="card__identifier">
        <p>{{ table.identifier }}</p>
      </section>
      <section class="card__value">
        <p>
          {{ table.totalRemaining | moneyViewFormatted }}
        </p>
      </section>
    </section>

    <section class="card__actions">
      <Button
        aria-label="Realizar pedido"
        @click.native="emitClick(typeModal.ModalOrdered)"
        text="Pedido"
      />
      <Button
        aria-label="Realizar pagamento"
        :disabled="isDisabledButton"
        @click.native="emitClick(typeModal.ModalPayment)"
        text="Pagar"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
import { Button } from '@/components';
import { TypeModal, IItemTable } from '@/modules/home/types';
import { moneyViewFormatted } from '@/modules/home/helpers';

@Component({
  components: {
    Button
  },
  filters: {
    moneyViewFormatted
  }
})
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  readonly itemTable!: IItemTable;

  @Emit('emit-click')
  public emitClick(typeModal: string) {
    return { typeModal, itemTable: this.itemTable };
  }

  public get typeModal() {
    return TypeModal;
  }

  public get table(): IItemTable {
    return this.itemTable;
  }

  public get isDisabledButton() {
    return !this.table.totalRemaining;
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  text-align: center;
  border-radius: 12px;
  width: 200px;
  color: #5c5c5c;
  box-shadow: 5px 5px #5c5c5c;

  &__infos {
    padding: 16px 32px 0;
  }

  &__identifier {
    font-size: 20px;
    font-weight: bold;
  }

  &__value {
    margin: 12px 0;
    font-size: 26px;
  }

  &__actions {
    display: flex;
    justify-content: space-around;
    padding: 8px;
    border-top: 1px solid #5c5c5c;
  }
}
</style>
