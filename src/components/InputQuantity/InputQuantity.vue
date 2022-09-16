<template>
  <div class="input-quantity">
    <button
      v-if="showDecrementInput"
      class="input-quantity__button"
      @click="decrementValue"
    >
      <span class="text-decrement"> - </span>
    </button>
    <span>{{ inputValue }}</span>
    <button class="input-quantity__button" @click="incrementValue">
      <span class="text-increment"> + </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: Object, required: true })
  readonly product!: any;

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
    margin: 8px;
    font-size: 12px;
    border-radius: 100%;
    border: 1px solid #5c5c5c;
    cursor: pointer;
  }
}

.text-increment {
  display: block;
  padding: 4px 8px;
}

.text-decrement {
  display: block;
  padding: 4px 10px;
}
</style>
