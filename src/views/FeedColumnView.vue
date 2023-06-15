<script setup>
import { useCommentsStore } from '../store/CommentsStore.js'

const store = useCommentsStore()
function pageStyle(offset, height) {
  return { height: height - offset + 'px' }
}
</script>

<template>
  <q-page :style-fn="pageStyle">
    <div class="column no-wrap fit">
      <div class="col-auto">
        <q-toolbar class="bg-accent text-white q-pl-lg">
          <q-toolbar-title>Feed column</q-toolbar-title>
        </q-toolbar>
      </div>
      <div v-if="store.data" class="col q-pt-md">
        <div class="row no-wrap full-height overflow-auto">
          <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-2 column">
            <q-intersection
              v-for="item in store.data"
              :key="item.id"
              class="full-width intersection-item"
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
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
