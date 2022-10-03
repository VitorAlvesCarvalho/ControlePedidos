<template>
  <div class="home">
    <AppBar class="animation" />

    <section v-if="!isOpenModal" class="home__content animation">
      <Card
        v-for="item in tables"
        :key="item.id"
        :item-table="item"
        @emit-click="openModal"
      />
    </section>

    <Modal
      v-if="isOpenModal"
      @event-close="closeModal"
      @confirm-ordered="confirmOrdered"
      @confirm-payment="confirmPayment"
      :type-modal="typeModal"
      :table-select="tableSelect"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppBar, Card, Modal } from '@/modules/home/components';
import {
  TypeModal,
  IItemTable,
  IPayloadModal,
  IConfirmOrdered,
  IConfirmPayment
} from '@/modules/home/types';
import { namespace } from 'vuex-class';

const HomeModules = namespace('HomeModule');

@Component({
  components: {
    AppBar,
    Card,
    Modal
  }
})
export default class Home extends Vue {
  @HomeModules.Getter('tables')
  readonly tables!: IItemTable[];

  @HomeModules.Action('setValueOrdered')
  public setValueOrdered!: Function;

  @HomeModules.Action('setValuePayment')
  public setValuePayment!: Function;

  public isOpenModal = false;
  public typeModal: string = TypeModal.ModalPayment;
  public tableSelect = {};

  public openModal(options: IPayloadModal) {
    this.tableSelect = options.itemTable;
    this.typeModal = options.typeModal;
    this.isOpenModal = true;
  }

  public closeModal() {
    this.isOpenModal = false;
  }

  public confirmOrdered(payload: IConfirmOrdered) {
    this.setValueOrdered({
      table: this.tableSelect,
      totalValue: payload.totalValue,
      productsAdd: payload.productsAdd
    } as IConfirmOrdered);

    this.closeModal();
  }

  public confirmPayment(paymentValue: number) {
    this.setValuePayment({
      table: this.tableSelect,
      paymentValue
    } as IConfirmPayment);

    this.closeModal();
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-image: url('~@/assets/imgs/background-home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &__content {
    position: relative;
    max-width: fit-content;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: $spacing-8;
  }

  @media (min-width: $tablet) {
    &__content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: $desktop) {
    &__content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.home:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-color: $color-black;
  opacity: 0.9;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animation {
  animation: fadeIn 1.5s ease-in-out;
}
</style>
