<template>
  <header class="header">Header</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppBar extends Vue {}
</script>

<style scoped>
.header {
  background-color: #a910ff;
  text-align: center;
  padding: 16px;
  color: white;
  font-size: 24px;
}
</style>
