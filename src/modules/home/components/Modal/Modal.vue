<template>
  <div class="modal">
    <section class="modal__container">
      <component
        @close-modal="emitEventClose"
        @confirm-ordered="emitConfirmOrdered"
        :is="typeModal"
        :table-select="tableSelect"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
import { ModalOrdered, ModalPayment } from '@/modules/home/components';

@Component({
  components: {
    ModalOrdered,
    ModalPayment
  }
})
export default class Card extends Vue {
  @Prop({ type: String, required: true })
  readonly typeModal!: string;

  @Prop({ type: Object, required: true })
  readonly tableSelect!: any;

  @Emit('event-close')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  emitEventClose() {}

  @Emit('confirm-ordered')
  public emitConfirmOrdered(totalValue) {
    return totalValue;
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    position: relative;
    border-radius: 16px;
    width: 40%;
    background-color: #fff;
    padding: 32px;
  }
}
</style>
