<template>
  <div @click="emitClick" class="card">
    <section class="card__infos">
      <section class="card__identifier">
        <p>Mesa 1</p>
      </section>
      <section class="card__value">
        <p>R$ 52,40</p>
      </section>
    </section>

    <section class="card__actions">
      <Button text="Adicionar" />
      <Button text="Pagar" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { Button } from '@/components';

@Component({
  components: {
    Button
  }
})
export default class Card extends Vue {
  @Emit('emit-click')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emitClick() {}
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  text-align: center;
  border-radius: 12px;
  width: max-content;
  color: rgba(0, 0, 0, 0.775);

  &__infos {
    padding: 16px 32px 0;
  }

  &__identifier {
    font-size: 20px;
    font-weight: bold;
  }

  &__value {
    margin: 12px 0;
    font-size: 26px;
  }

  &__actions {
    display: flex;
    justify-content: space-around;
    padding: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.255);
  }
}
</style>
