<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCommentsStore } from '../store/CommentsStore.js'

const props = defineProps({
  id: { type: String, default: null }
})
const router = useRouter()
const store = useCommentsStore()
const selected = ref(null)
const drawer = ref(false)
const occupy = ref(false)
const itemId = props.id ? parseInt(props.id) : null
watch(selected, (value) => {
  if (value) drawer.value = true
})
watch(drawer, (value) => {
  if (!value) {
    if (selected.value) selected.value = null
    router.back()
  }
})
if (itemId) {
  const select = () => {
    selected.value = store.getItem(itemId)
  }
  if (store.data) select()
  else
    watch(
      () => store.data,
      () => select()
    )
}
function drawerWidth(screen) {
  if (screen.gt.sm) return (screen.width - 317) / 2
  if (screen.sm) return 300
  return screen.width
}
function onLayout(state) {
  if (occupy.value !== state && !state && selected.value) drawer.value = true
  occupy.value = state
}
function back() {
  selected.value = null
  drawer.value = false
}
</script>

<template>
  <q-drawer
    v-model="drawer"
    side="right"
    :breakpoint="599"
    show-if-above
    :width="drawerWidth($q.screen)"
    @on-layout="onLayout"
  >
    <q-scroll-area v-if="selected" class="fit">
      <div class="q-pt-md">
        <q-toolbar>
          <q-btn flat round icon="arrow_back" :class="occupy ? 'lt-sm' : 'lt-md'" @click="back" />
          <q-toolbar-title>Detail</q-toolbar-title>
        </q-toolbar>
      </div>
      <div class="q-pt-xs q-px-lg">
        <div class="text-subtitle1">{{ selected.name }}</div>
        <p>{{ selected.email }}</p>
        <p v-for="n in 15" :key="n">{{ selected.body }}</p>
      </div>
    </q-scroll-area>
    <div v-else class="flex flex-center fit">
      <q-card flat class="text-center text-grey" style="max-width: 250px">
        <q-avatar size="100px" icon="info_outline" />
        <q-card-section>Select something first</q-card-section>
      </q-card>
    </div>
  </q-drawer>
</template>
