<script setup>
import { watch } from 'vue'
import { useCommentsStore } from '../store/CommentsStore.js'
import { onBeforeRouteLeave } from 'vue-router'

const props = defineProps({
  id: { type: String, required: true }
})
const itemId = parseInt(props.id)
const store = useCommentsStore()
if (itemId) {
  const select = () => (store.selected = store.getItem(itemId))
  if (store.data) select()
  else
    watch(
      () => store.data,
      () => select()
    )
}
onBeforeRouteLeave(() => (store.selected = null))
</script>

<template>
  <q-scroll-area v-if="store.selected" class="fit">
    <div class="q-pt-md">
      <q-toolbar>
        <q-btn flat round icon="arrow_back" class="lt-sm" @click="$router.back()" />
        <q-toolbar-title>Detail</q-toolbar-title>
        <q-btn flat round icon="delete" />
        <q-btn flat round icon="save" />
      </q-toolbar>
    </div>
    <div class="q-pt-xs q-px-lg">
      <div class="text-subtitle1">{{ store.selected.name }}</div>
      <p>{{ store.selected.email }}</p>
      <p v-for="n in 15" :key="n">{{ store.selected.body }}</p>
    </div>
  </q-scroll-area>
</template>
