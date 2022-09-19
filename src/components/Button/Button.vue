<template>
  <button
    :disabled="disabled"
    :aria-label="ariaLabel"
    :class="['button', size]"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { SizeButton } from '@/modules/home/types';

@Component
export default class Button extends Vue {
  @Prop({ type: String, required: false, default: 'Confirmar' })
  readonly text?: string;

  @Prop({ type: String, required: false, default: 'sm' })
  readonly sizeButton?: string;

  @Prop({ type: Boolean, required: false, default: false })
  readonly disabled?: boolean;

  @Prop({ type: String, required: false, default: 'Botão de ação' })
  readonly ariaLabel?: string;

  public get size() {
    switch (this.sizeButton) {
      case SizeButton.sm:
        return 'size-sm';
      case SizeButton.md:
        return 'size-md';
      case SizeButton.lg:
        return 'size-lg';
    }

    return '';
  }
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  background-color: #5c5c5c;
  border: none;
  color: white;
  border-radius: 8px;
}

.button:hover {
  opacity: 0.8;
}

.button:disabled {
  cursor: default;
  opacity: 0.3;
}

.size-sm {
  width: 100%;
  padding: 4px 0;
  font-size: 16px;
  margin: 0 4px;
}

.size-md {
  width: 100%;
  padding: 4px 0;
  font-size: 20px;
  margin: 0 8px;
}

.size-lg {
  width: 100%;
  padding: 16px 0;
  font-size: 48px;
  margin: 16px;
}
</style>
