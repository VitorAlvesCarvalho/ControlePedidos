<template>
  <div>
    <app-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppBar } from '@/modules/home/components/AppBar';

@Component({
  components: {
    AppBar
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
