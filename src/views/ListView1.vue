<script setup>
import { useCommentsStore } from '../store/CommentsStore.js'

const store = useCommentsStore()
</script>

<template>
  <q-page style="padding-top: 66px">
    <div v-if="store.data">
      <q-intersection v-for="item in store.data" :key="item.id" class="intersection-item" once>
        <q-item
          clickable
          class="q-px-lg"
          :active="store.selected && store.selected.id === item.id"
          @click="store.selected = item"
        >
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-accent text-white q-pl-lg">
        <q-toolbar-title>List</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
