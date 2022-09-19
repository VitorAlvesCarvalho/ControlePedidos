<template>
  <div class="content-modal">
    <header class="content-modal__title">
      <p>Novo Pagamento - {{ tableSelect.identifier }}</p>
    </header>

    <section class="infos">
      <div class="infos__headers infos__grid">
        <p>Pedido</p>
        <p>Qtd.</p>
        <p>Und</p>
        <p>Valor</p>
      </div>
      <div
        class="infos__list infos__grid"
        v-for="item in tableSelect.ordered"
        :key="item.id"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.valueAdd / item.value }}</p>
        <p>{{ item.value | moneyViewFormatted }}</p>
        <p>{{ item.valueAdd | moneyViewFormatted }}</p>
      </div>
    </section>

    <section class="payment">
      <div class="payment__headers payment__grid">
        <p>Total Parcial</p>
        <p>Pagamentos</p>
        <p>Total Restante</p>
      </div>

      <div class="payment__values payment__grid">
        <p>{{ tableSelect.valueOrdered | moneyViewFormatted }}</p>
        <p>{{ tableSelect.payments | moneyViewFormatted }}</p>
        <p>{{ tableSelect.totalRemaining | moneyViewFormatted }}</p>
      </div>
    </section>

    <section class="content-modal__input">
      <input
        v-money="formatterOptions"
        v-model="valuePayment"
        :class="['input', { 'input-error': showMessageError }]"
        placeholder="Valor do pagamento"
      />
      <p v-if="showMessageError" class="message-error">
        Valor do pagamento maior que conta atual!
      </p>
    </section>

    <footer class="content-modal__actions">
      <Button
        aria-label="Cancelar pagamento"
        @click.native="emitClose"
        sizeButton="md"
        text="Cancelar"
      />
      <Button
        aria-label="Confirmar pagamento"
        :disabled="isDisabledButton"
        @click.native="emitConfirm"
        sizeButton="md"
        text="Confirmar"
      />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import { Button } from '@/components';
import { VMoney } from 'v-money';
import { IItemTable } from '@/modules/home/types';
import { moneyViewFormatted, currencyToNumber } from '@/modules/home/helpers';

@Component({
  components: {
    Button
  },
  directives: { money: VMoney },
  filters: {
    moneyViewFormatted
  }
})
export default class ModalPayment extends Vue {
  @Prop({ type: Object, required: true })
  readonly tableSelect!: IItemTable;

  public valuePayment = '';

  public get isDisabledButton() {
    return (
      !this.valuePaymentToNumber ||
      this.valuePaymentToNumber < 0 ||
      this.showMessageError
    );
  }

  public get showMessageError() {
    return this.valuePaymentToNumber > this.tableSelect.totalRemaining;
  }

  public get valuePaymentToNumber() {
    return currencyToNumber(this.valuePayment);
  }

  @Emit('close-modal')
  public emitClose() {}

  @Emit('confirm-payment')
  public emitConfirm() {
    return this.valuePaymentToNumber;
  }

  public get formatterOptions() {
    return {
      decimal: ',',
      thousands: '.',
      prefix: 'R$',
      precision: 2
    };
  }
}
</script>

<style lang="scss" scoped>
.content-modal {
  max-height: 90vh;
  overflow-y: auto;

  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: $spacing-5;
  }

  &__input {
    padding: $spacing-10 0;
  }

  &__actions {
    display: flex;
    justify-content: center;
  }
}

.infos {
  padding-bottom: $spacing-5;
  border-bottom: 1px dashed #000;

  &__headers {
    font-size: 20px;
    font-weight: bold;
  }

  &__list {
    padding: $spacing-2 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
}

.payment {
  padding: $spacing-5 0;
  border-bottom: 1px dashed #000;

  &__headers {
    font-size: 20px;
    font-weight: bold;
  }

  &__values {
    padding: $spacing-2 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

.input {
  padding: $spacing-2 16px;
  border: 1px solid #5c5c5c;
  border-radius: 16px;
  font-size: 20px;
  outline: none;
}

.input-error {
  border: 1px solid rgb(255, 0, 0);
}

.message-error {
  margin-top: $spacing-2;
  color: rgb(255, 0, 0);
  font-weight: bold;
}
</style>
