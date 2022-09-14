<template>
  <header class="header">
    <section class="header__day">
      <p>{{ currentDay }}</p>
    </section>
    <section class="header__hours">
      <p>{{ currentTime }}</p>
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

  public get currentTime() {
    return this.date.toLocaleTimeString();
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: #a910ff;
  text-align: center;
  padding: 8px;
  color: white;
  width: 100%;

  &__day {
    font-size: 20px;
  }

  &__hours {
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
