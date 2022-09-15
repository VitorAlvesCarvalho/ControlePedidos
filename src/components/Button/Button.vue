<template>
  <button class="button">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ type: String, required: false, default: 'Confirmar' })
  readonly text?: string;
}
</script>

<style lang="scss" scoped>
.button {
  padding: 4px 20px;
  cursor: pointer;
  background-color: #5c5c5c;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  margin: 4px;
}

.button:hover {
  opacity: 0.8;
}
</style>
