<template>
  <div class="home">
    <AppBar class="animation" />

    <section class="home__content animation">
      <Card v-for="item in 9" :key="item" @emit-click="openModal" />
    </section>

    <Modal
      v-if="isOpenModal"
      @event-close="closeModal"
      :typeModal="typeModal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppBar, Card, Modal } from '@/modules/home/components';
import { TypeModal } from '@/modules/home/types';

@Component({
  components: {
    AppBar,
    Card,
    Modal
  }
})
export default class Home extends Vue {
  public isOpenModal = false;
  public typeModal: string = TypeModal.ModalPayment;

  public openModal(typeModal: string) {
    this.typeModal = typeModal;
    this.isOpenModal = true;
  }

  public closeModal() {
    this.isOpenModal = false;
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
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 32px;
  }
}

.home:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-color: #000;
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
  animation: fadeIn 3s ease-in-out;
}
</style>
