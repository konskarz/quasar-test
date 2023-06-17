<script setup>
import { useCommentsStore } from '../store/CommentsStore.js'

const store = useCommentsStore()
</script>

<template>
  <q-page class="q-pt-md">
    <q-toolbar class="q-pl-lg">
      <q-toolbar-title>List</q-toolbar-title>
    </q-toolbar>
    <div v-if="store.data">
      <q-intersection v-for="item in store.data" :key="item.id" class="intersection-item" once>
        <q-item :to="{ name: 'detail-drawer-item', params: { id: item.id } }" exact class="q-px-lg">
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </q-page>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
37 changes: 37 additions & 0 deletions37
