<template>
  <div class="input-quantity">
    <button
      v-if="showDecrementInput"
      aria-label="Diminuir quantidade"
      class="input-quantity__button"
      @click="decrementValue"
    >
      <span class="text-decrement"> - </span>
    </button>
    <span>{{ inputValue }}</span>
    <button
      aria-label="Aumentar quantidade"
      class="input-quantity__button"
      @click="incrementValue"
    >
      <span class="text-increment"> + </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';
import { IProduct } from '@/modules/home/types';

@Component
export default class InputQuantity extends Vue {
  @Prop({ type: Object, required: true })
  readonly product!: IProduct;

  public inputValue = 0;

  public get showDecrementInput() {
    return this.inputValue > 0;
  }

  public decrementValue() {
    this.inputValue--;
  }

  public incrementValue() {
    this.inputValue++;
  }

  @Emit('emit-value')
  private emitValue() {
    return { product: this.product, value: this.inputValue };
  }

  @Watch('inputValue')
  public updateValue() {
    this.emitValue();
  }
}
</script>

<style lang="scss" scoped>
.input-quantity {
  &__button {
    background-color: #fff;
    margin: $spacing-2;
    font-size: 12px;
    border-radius: 100%;
    border: 1px solid #5c5c5c;
    cursor: pointer;
    width: 24px;
  }
}

.text-increment {
  display: block;
  padding: $spacing-1;
}

.text-decrement {
  display: block;
  padding: $spacing-1;
}
</style>
