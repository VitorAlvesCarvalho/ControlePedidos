<template>
  <div class="input-quantity">
    <button
      v-if="showDecrementInput"
      class="input-quantity__button"
      @click="decrementValue"
    >
      <span class="text-decrement"> - </span>
    </button>
    <span>{{ value }}</span>
    <button class="input-quantity__button" @click="incrementValue">
      <span class="text-increment"> + </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  public value = 0;

  public get showDecrementInput() {
    return this.value > 0;
  }

  public decrementValue() {
    this.value--;
  }

  public incrementValue() {
    this.value++;
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
