<template>
  <div class="card">
    <section class="card__infos">
      <section class="card__identifier">
        <p>{{ itemTable.identifier }}</p>
      </section>
      <section class="card__value">
        <p>
          {{ itemTable.totalRemaining | moneyViewFormatted }}
        </p>
      </section>
    </section>

    <section class="card__actions">
      <Button
        data-testid="ordered-button"
        aria-label="Realizar pedido"
        @click.native="emitClick(typeModal.ModalOrdered)"
        text="Pedido"
      />
      <Button
        data-testid="payment-button"
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
import { Button } from '@/modules/home/components';
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

  public get isDisabledButton() {
    return !this.itemTable.totalRemaining;
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $color-white;
  text-align: center;
  border-radius: 12px;
  width: 200px;
  color: $color-primary;
  box-shadow: 5px 5px $color-primary;

  &__infos {
    padding: $spacing-4 $spacing-8 0;
  }

  &__identifier {
    font-size: 20px;
    font-weight: bold;
  }

  &__value {
    margin: $spacing-3 0;
    font-size: 26px;
  }

  &__actions {
    display: flex;
    justify-content: space-around;
    padding: $spacing-2;
    border-top: 1px solid $color-primary;
  }
}
</style>
