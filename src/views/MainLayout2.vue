<script setup>
import { ref } from 'vue'

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
    <q-footer class="lt-sm bg-white text-black">
      <q-tabs no-caps active-color="primary" indicator-color="transparent">
        <q-route-tab
          v-for="(view, index) in views"
          :key="index"
          :to="view.to"
          :icon="view.icon"
          :label="view.label"
          exact
        />
      </q-tabs>
    </q-footer>
    <q-drawer
      :mini="$q.screen.sm && mini"
      :mini-to-overlay="$q.screen.sm"
      :breakpoint="599"
      show-if-above
    >
      <q-scroll-area class="drawer-scroll-area">
        <q-list>
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
      <div class="absolute-top q-pt-md">
        <q-item style="min-height: 50px">
          <q-item-section avatar class="lt-md" @click="mini = !mini">
            <q-icon :name="mini ? 'menu' : 'menu_open'" />
          </q-item-section>
          <q-item-section class="text-h6">Vite App</q-item-section>
        </q-item>
      </div>
    </q-drawer>
    <router-view :key="$route.path" name="detail" />
    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>

<style scoped>
.drawer-scroll-area {
  height: calc(100% - 66px);
  margin-top: 66px;
}
</style>
