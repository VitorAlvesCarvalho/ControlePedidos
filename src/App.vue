<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
}

p {
  margin: 0;
}
</style>
