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
          <InputQuantity
            @emit-value="updateValue"
            :product="product"
            class="align-right"
          />
        </div>
      </div>
    </section>

    <section class="content-modal__total">
      <p>Total: {{ totalValue }}</p>
    </section>

    <footer class="content-modal__actions">
      <Button @click.native="emitClose" sizeButton="md" text="Cancelar" />
      <Button @click.native="emitConfirm" sizeButton="md" text="Confirmar" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import { Button } from '@/components';
import { InputQuantity } from '@/modules/home/components';
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

  public totalValue = 0;
  private productsAdd: any = [];

  @Prop({ type: Object, required: true })
  readonly tableSelect!: any;

  @Emit('close-modal')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public emitClose() {}

  public updateValue(options: any) {
    this.totalValue = 0;

    const isAddedProduct = this.productsAdd.some(
      (item: any) => item.id === options.product.id
    );

    options.product.valueAdd = options.value * options.product.value;

    if (!isAddedProduct) {
      this.productsAdd.push(options.product);
    }

    this.productsAdd.forEach((element: any) => {
      this.totalValue += element.valueAdd;
    });
  }

  @Emit('confirm-ordered')
  public emitConfirm() {
    return { totalValue: this.totalValue, productsAdd: this.productsAdd };
  }
}
</script>

<style lang="scss" scoped>
.content-modal {
  max-height: 90vh;
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
