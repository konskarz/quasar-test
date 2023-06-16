<script setup>
import { useCommentsStore } from '../store/CommentsStore.js'

const store = useCommentsStore()
</script>

<template>
  <q-page class="q-pt-md">
    <q-toolbar class="q-pl-lg">
      <q-toolbar-title>Feed row</q-toolbar-title>
    </q-toolbar>
    <div v-if="store.data" class="row">
      <q-intersection
        v-for="item in store.data"
        :key="item.id"
        class="col-xs-12 col-sm-6 col-lg-4 col-xl-2 intersection-item"
        once
      >
        <q-item clickable class="q-px-lg">
          <q-item-section side>
            <q-item-label>{{ item.id }}</q-item-label>
          </q-item-section>
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
