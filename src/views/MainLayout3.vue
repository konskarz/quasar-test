<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const mini = ref(true)
const views = [
  { to: '/', icon: 'view_sidebar', label: 'Detail drawer' },
  { to: '/list-detail', icon: 'view_carousel', label: 'Detail panel' },
  { to: '/feed-row', icon: 'view_stream', label: 'Feed row' },
  { to: '/feed-column', icon: 'view_column', label: 'Feed column' }
]
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal :reveal-offset="0">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          :icon="mini ? 'menu' : 'menu_open'"
          class="sm"
          @click="mini = !mini"
        />
        <q-btn flat round dense icon="menu" class="xs" @click="drawer = true" />
        <q-toolbar-title>Vite App</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      :mini="$q.screen.sm && mini"
      :mini-to-overlay="$q.screen.sm"
      :breakpoint="599"
      show-if-above
      bordered
    >
      <q-scroll-area class="fit">
        <q-toolbar class="xs bg-primary text-white">
          <q-btn flat round dense icon="menu_open" @click="drawer = false" />
        </q-toolbar>
        <q-list class="q-py-md">
          <q-item
            v-for="(view, index) in views"
            :key="index"
            :to="view.to"
            exact
            @click="mini = true"
          >
            <q-item-section avatar><q-icon :name="view.icon" /></q-item-section>
            <q-item-section>{{ view.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <router-view :key="$route.path" name="detail" />
    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>
