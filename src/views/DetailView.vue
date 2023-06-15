<script setup>
import { useCommentsStore } from '../store/CommentsStore.js'
import { onBeforeRouteLeave } from 'vue-router'

const props = defineProps({
  id: { type: String, required: true }
})
const itemId = parseInt(props.id)
const store = useCommentsStore()
if (itemId && store.data) store.selected = store.getItem(itemId)
onBeforeRouteLeave(() => (store.selected = null))
</script>

<template>
  <div v-if="store.selected !== null" class="column no-wrap fit">
    <div class="col-auto">
      <q-toolbar class="bg-accent text-white">
        <q-btn flat round icon="arrow_back" class="lt-sm" @click="$router.back()" />
        <q-toolbar-title>Detail</q-toolbar-title>
        <q-btn flat round icon="delete" />
        <q-btn flat round icon="save" />
      </q-toolbar>
    </div>
    <q-scroll-area class="col">
      <div class="q-py-md q-px-lg">
        <div class="text-h6">{{ store.selected.name }}</div>
        <p>{{ store.selected.email }}</p>
        <p v-for="n in 15" :key="n">{{ store.selected.body }}</p>
      </div>
    </q-scroll-area>
  </div>
</template>
