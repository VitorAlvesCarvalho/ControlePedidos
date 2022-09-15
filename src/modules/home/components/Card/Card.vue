<template>
  <div class="card">
    <section class="card__infos">
      <section class="card__identifier">
        <p>Mesa 1</p>
      </section>
      <section class="card__value">
        <p>R$ 52,40</p>
      </section>
    </section>

    <section class="card__actions">
      <Button @click.native="emitClick(typeModal.ModalOrdered)" text="Pedido" />
      <Button @click.native="emitClick(typeModal.ModalPayment)" text="Pagar" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { Button } from '@/components';
import { TypeModal } from '@/modules/home/types';

@Component({
  components: {
    Button
  }
})
export default class Card extends Vue {
  @Emit('emit-click')
  public emitClick(typeModal: string) {
    return typeModal;
  }

  public get typeModal() {
    return TypeModal;
  }
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
