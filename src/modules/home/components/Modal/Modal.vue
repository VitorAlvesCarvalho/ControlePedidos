<template>
  <div class="modal">
    <section class="modal__container animation-modal">
      <component :is="typeModal" v-on="$listeners" v-bind="$attrs" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
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
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $background-modal;

  &__container {
    position: relative;
    border-radius: 16px;
    width: 100%;
    background-color: $color-white;
    padding: $spacing-4;
  }

  @media (min-width: $desktop) {
    &__container {
      width: 40%;
      padding: $spacing-8;
    }
  }
}

@keyframes blowUpModal {
  0% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1);
  }
}

.animation-modal {
  animation: blowUpModal 1s ease forwards;
}
</style>
