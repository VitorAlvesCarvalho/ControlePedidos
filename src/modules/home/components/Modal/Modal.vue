<template>
  <div class="modal">
    <div class="modal__container">
      <p @click="emitEventClose">X</p>

      <p>Modal</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Emit('event-close')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  emitEventClose() {}
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.9;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    border-radius: 16px;
    width: 40%;
    background-color: #fff;
    padding: 32px;
  }
}
</style>
