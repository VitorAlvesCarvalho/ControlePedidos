<template>
  <div class="content-modal">
    <header class="content-modal__title">
      <p>Novo Pagamento - Mesa 1</p>
    </header>

    <section class="infos">
      <div class="infos__headers infos__grid">
        <p>Pedido</p>
        <p>Qtd.</p>
        <p>Horário</p>
        <p>Und</p>
        <p>Valor</p>
      </div>
      <div class="infos__list infos__grid" v-for="item in 3" :key="item">
        <p>Cerveja Preta</p>
        <p>2</p>
        <p>15:32</p>
        <p>R$ 10,00</p>
        <p>R$20,00</p>
      </div>
    </section>

    <section class="payment">
      <div class="payment__headers payment__grid">
        <p>Total Parcial</p>
        <p>Pagamentos</p>
        <p>Total Restante</p>
      </div>

      <div class="payment__values payment__grid">
        <p>R$30,00</p>
        <p>R$30,00</p>
        <p>R$30,00</p>
      </div>
    </section>

    <section class="content-modal__input">
      <input
        v-model="value"
        class="input"
        placeholder="Valor do pagamento"
        aria-label="teste"
      />
    </section>

    <footer class="content-modal__actions">
      <Button @click.native="emitClose" sizeButton="md" text="Cancelar" />
      <Button sizeButton="md" text="Confirmar" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import { Button } from '@/components';

@Component({
  components: {
    Button
  }
})
export default class ModalPayment extends Vue {
  public value = '';

  @Emit('close-modal')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emitClose() {}
}
</script>

<style lang="scss" scoped>
.content-modal {
  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  &__input {
    padding: 40px 0;
  }

  &__actions {
    display: flex;
    justify-content: center;
  }
}

.infos {
  padding-bottom: 20px;
  border-bottom: 1px dashed #000;

  &__headers {
    font-size: 20px;
    font-weight: bold;
  }

  &__list {
    padding: 8px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 3fr 1fr 2fr 2fr 2fr;
    grid-gap: 10px;
  }
}

.payment {
  padding: 20px 0;
  border-bottom: 1px dashed #000;

  &__headers {
    font-size: 20px;
    font-weight: bold;
  }

  &__values {
    padding: 8px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

.input {
  padding: 8px 16px;
  border: 1px solid #5c5c5c;
  border-radius: 16px;
  font-size: 20px;
  outline: none;
}
</style>
