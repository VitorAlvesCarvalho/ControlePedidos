<template>
  <header class="header">
    <section class="header__day">
      <p>{{ currentDay }}</p>
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { dayFormatted } from '@/modules/home/helpers';

@Component
export default class AppBar extends Vue {
  private date: Date = new Date();

  public get currentDay() {
    return dayFormatted(this.date.getUTCDay());
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  text-align: center;
  padding: $spacing-8 0;
  color: $color-white;
  width: 100%;

  &__day {
    font-size: 32px;
  }
}
</style>
