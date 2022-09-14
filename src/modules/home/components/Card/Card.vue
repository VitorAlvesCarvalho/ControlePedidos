<template>
  <div @click="emitClick" class="card">
    <section class="card__hour">
      <p>14:43</p>
    </section>
    <section class="card__value">
      <p>R$ 52,40</p>
    </section>
    <section class="card__identifier">
      <p>Mesa 1</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Emit('emit-click')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emitClick() {}
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #a910ff;
  text-align: center;
  padding: 18px;
  border-radius: 100%;
  color: white;
  width: max-content;
  cursor: pointer;

  &__hour &__identifier {
    font-size: 12px;
  }

  &__value {
    margin: 12px 0;
    font-size: 26px;
  }
}

.card:hover {
  transform: scale(1.1);
}
</style>
