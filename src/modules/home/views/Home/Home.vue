<template>
  <div class="home">
    <app-bar />

    <section class="home__content">
      <card v-for="item in 10" :key="item" @emit-click="openModal" />
    </section>

    <modal @event-close="closeModal" v-if="isOpenModal" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppBar, Card, Modal } from '@/modules/home/components';

@Component({
  components: {
    AppBar,
    Card,
    Modal
  }
})
export default class Home extends Vue {
  public isOpenModal = false;

  public openModal() {
    this.isOpenModal = true;
  }

  public closeModal() {
    this.isOpenModal = false;
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #a710ff86;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    max-width: fit-content;
    padding-top: 60px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
