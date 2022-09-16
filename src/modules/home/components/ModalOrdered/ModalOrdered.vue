<template>
  <div class="content-modal">
    <header class="content-modal__title">
      <p>Novo Pedido - {{ tableSelect.identifier }}</p>
    </header>

    <section>
      <div v-for="item in productsList" :key="item.id" class="products">
        <p class="products__title">{{ item.identifier }}</p>
        <div
          class="products__list"
          v-for="product in item.products"
          :key="product.id"
        >
          <p>{{ product.name }}</p>
          <p class="align-center">{{ product.value }}</p>
          <InputQuantity class="align-right" />
        </div>
      </div>
    </section>

    <section class="content-modal__total">
      <p>Total: R$ 30,00</p>
    </section>

    <footer class="content-modal__actions">
      <Button @click.native="emitClose" sizeButton="md" text="Cancelar" />
      <Button sizeButton="md" text="Confirmar" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import { Button, InputQuantity } from '@/components';
import { namespace } from 'vuex-class';

const HomeModules = namespace('HomeModule');

@Component({
  components: {
    Button,
    InputQuantity
  }
})
export default class ModalOrdered extends Vue {
  @HomeModules.Getter('products')
  readonly productsList!: any;

  @Prop({ type: Object, required: true })
  readonly tableSelect!: any;

  @Emit('close-modal')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emitClose() {}
}
</script>

<style lang="scss" scoped>
.content-modal {
  max-height: 80vh;
  overflow-y: auto;
  &__title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  &__total {
    font-size: 24px;
    font-weight: bold;
    margin: 32px 0;
  }

  &__actions {
    display: flex;
    justify-content: center;
  }
}

.products {
  margin-bottom: 16px;

  &__title {
    font-size: 20px;
    font-weight: bold;
  }

  &__list {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 0;
    border-bottom: 1px solid #5c5c5c;
  }
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}
</style>
