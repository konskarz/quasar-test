<script setup>
import { ref } from 'vue'
import TheNavigation from '../components/TheNavigation.vue'

const drawer = ref(false)
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal :reveal-offset="0">
      <q-toolbar>
        <q-btn flat round icon="menu" class="lt-md" @click="drawer = !drawer" />
        <q-toolbar-title>Vite App</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above>
      <TheNavigation @close="drawer = false" />
    </q-drawer>
    <router-view :key="$route.path" name="detail" />
    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>
