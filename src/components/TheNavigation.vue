<script setup>
defineEmits(['close'])

const views = [
  { to: '/', icon: 'view_sidebar', label: 'Detail drawer' },
  { to: '/list-detail', icon: 'view_carousel', label: 'Detail panel' },
  { to: '/feed-row', icon: 'view_stream', label: 'Feed row' },
  { to: '/feed-column', icon: 'view_column', label: 'Feed column' },
  { to: '/narrow-layout', icon: 'view_compact', label: 'Narrow layout' }
]
</script>
<template>
  <q-scroll-area class="fit">
    <q-toolbar class="lt-md bg-primary text-white">
      <q-btn flat round dense icon="menu_open" @click="$emit('close')" />
    </q-toolbar>
    <q-list class="q-py-md">
      <q-item v-for="(view, index) in views" :key="index" :to="view.to" exact>
        <q-item-section avatar><q-icon :name="view.icon" /></q-item-section>
        <q-item-section>{{ view.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>
