<template>
  <div class="home">
    <app-bar />

    <section class="home__content">
      <card v-for="item in 10" :key="item" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppBar, Card } from '@/modules/home/components';

@Component({
  components: {
    AppBar,
    Card
  }
})
export default class Home extends Vue {}
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
