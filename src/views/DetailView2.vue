<script setup>
import { ref, watch } from 'vue'
import { useCommentsStore } from '../store/CommentsStore.js'

const store = useCommentsStore()
const drawer = ref(false)
watch(drawer, (newData) => {
  if (!newData) store.selected = null
})
watch(
  () => store.selected,
  (newData) => (drawer.value = newData ? true : false)
)
function drawerWidth(screen) {
  if (screen.gt.sm) return (screen.width - 300) / 2
  if (screen.sm) return screen.width / 2
  return screen.width
}
</script>

<template>
  <q-drawer
    v-model="drawer"
    side="right"
    :breakpoint="599"
    show-if-above
    :width="drawerWidth($q.screen)"
  >
    <q-scroll-area v-if="store.selected" class="drawer-scroll-area">
      <div class="q-py-md q-px-lg">
        <div class="text-h6">{{ store.selected.name }}</div>
        <p>{{ store.selected.email }}</p>
        <p v-for="n in 15" :key="n">{{ store.selected.body }}</p>
      </div>
    </q-scroll-area>
    <q-toolbar v-if="store.selected" class="absolute-top bg-accent text-white">
      <q-btn flat round icon="arrow_back" class="lt-sm" @click="drawer = false" />
      <q-toolbar-title>Detail</q-toolbar-title>
      <q-btn flat round icon="delete" />
      <q-btn flat round icon="save" />
    </q-toolbar>
    <div v-else class="flex flex-center fit">
      <q-card flat class="text-center text-grey" style="max-width: 250px">
        <q-avatar size="100px" icon="info_outline" />
        <q-card-section>Select something first</q-card-section>
      </q-card>
    </div>
  </q-drawer>
</template>

<style scoped>
.drawer-scroll-area {
  height: calc(100% - 50px);
  margin-top: 50px;
}
</style>
