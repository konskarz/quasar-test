<script setup>
import { ref } from 'vue'
import TheNavigation from '../components/TheNavigation.vue'

const drawer = ref(false)
function width(screen) {
  const margin = (screen.width - 583) / 2
  return margin > 300 ? margin : 300
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal :reveal-offset="0">
      <q-toolbar>
        <q-btn flat round icon="menu" class="lt-md" @click="drawer = !drawer" />
        <q-toolbar-title>Vite App</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :width="width($q.screen)">
      <TheNavigation class="drawer" @close="drawer = false" />
    </q-drawer>
    <q-page-container>
      <q-page>
        <div class="page q-py-md q-px-lg">
          <q-toolbar class="q-px-none">
            <q-toolbar-title>Headline</q-toolbar-title>
          </q-toolbar>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium
            molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores
            pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style scoped>
.page {
  max-width: 583px;
}
@media (max-width: 1023.98px) {
  .page {
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 1024px) {
  .drawer {
    max-width: 300px;
  }
}
</style>
