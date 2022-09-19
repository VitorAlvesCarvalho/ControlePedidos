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
        :key="item"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.valueAdd / item.value }}</p>
        <p>{{ item.value }}</p>
        <p>{{ item.valueAdd }}</p>
      </div>
    </section>

    <section class="payment">
      <div class="payment__headers payment__grid">
        <p>Total Parcial</p>
        <p>Pagamentos</p>
        <p>Total Restante</p>
      </div>

      <div class="payment__values payment__grid">
        <p>{{ tableSelect.valueOrdered }}</p>
        <p>{{ tableSelect.payments }}</p>
        <p>{{ tableSelect.totalRemaining }}</p>
      </div>
    </section>

    <section class="content-modal__input">
      <input
        v-model.number="valuePayment"
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

@Component({
  components: {
    Button
  },
  directives: { money: VMoney }
})
export default class ModalPayment extends Vue {
  @Prop({ type: Object, required: true })
  readonly tableSelect!: any;

  public valuePayment = '';

  public get isDisabledButton() {
    return !this.valuePayment || this.showMessageError;
  }

  public get showMessageError() {
    return this.valuePayment > this.tableSelect.totalRemaining;
  }

  @Emit('close-modal')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emitClose() {}

  @Emit('confirm-payment')
  public emitConfirm() {
    return this.valuePayment;
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
    margin-bottom: 20px;
  }

  &__input {
    padding: 40px 0;
  }

  &__actions {
    display: flex;
    justify-content: center;
  }
}

.infos {
  padding-bottom: 20px;
  border-bottom: 1px dashed #000;

  &__headers {
    font-size: 20px;
    font-weight: bold;
  }

  &__list {
    padding: 8px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
}

.payment {
  padding: 20px 0;
  border-bottom: 1px dashed #000;

  &__headers {
    font-size: 20px;
    font-weight: bold;
  }

  &__values {
    padding: 8px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

.input {
  padding: 8px 16px;
  border: 1px solid #5c5c5c;
  border-radius: 16px;
  font-size: 20px;
  outline: none;
}

.input-error {
  border: 1px solid rgb(255, 0, 0);
}

.message-error {
  margin-top: 8px;
  color: rgb(255, 0, 0);
  font-weight: bold;
}
</style>
