<script setup>
import NavigationTabs from '../components/NavigationTabs.vue'

const views = [
  { to: '/', icon: 'view_list', label: 'List' },
  { to: '/feed-row', icon: 'view_stream', label: 'Row' },
  { to: '/feed-column', icon: 'view_column', label: 'Column' }
]
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-footer bordered class="lt-sm bg-white text-black">
      <NavigationTabs
        v-model="views"
        no-caps
        active-color="primary"
        indicator-color="transparent"
      />
    </q-footer>
    <q-drawer :mini="$q.screen.lt.md" :breakpoint="600" :mini-width="75" show-if-above bordered>
      <q-scroll-area class="fit">
        <q-list class="gt-sm">
          <q-item v-for="(view, index) in views" :key="index" :to="view.to" exact>
            <q-item-section avatar><q-icon :name="view.icon" /></q-item-section>
            <q-item-section>{{ view.label }}</q-item-section>
          </q-item>
        </q-list>
        <NavigationTabs
          v-model="views"
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="lt-md"
          vertical
        />
      </q-scroll-area>
    </q-drawer>
    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>
