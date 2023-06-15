<script setup>
import { useCommentsStore } from '../store/CommentsStore.js'
import ListDetailPage from '../components/ListDetailPage.vue'

const store = useCommentsStore()
</script>

<template>
  <ListDetailPage v-model="store.selected">
    <template #list>
      <div class="column no-wrap fit">
        <div class="col-auto">
          <q-toolbar class="bg-accent text-white q-pl-lg">
            <q-toolbar-title>List</q-toolbar-title>
          </q-toolbar>
        </div>
        <q-scroll-area class="col">
          <div v-if="store.data" class="q-py-md">
            <q-intersection
              v-for="item in store.data"
              :key="item.id"
              class="intersection-item"
              once
            >
              <q-item :to="{ name: 'comment', params: { id: item.id } }" exact class="q-px-lg">
                <q-item-section>
                  <q-item-label>{{ item.name }}</q-item-label>
                  <q-item-label caption>{{ item.email }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-intersection>
          </div>
        </q-scroll-area>
      </div>
    </template>
    <template #detail>
      <div v-if="!store.selected" class="flex flex-center fit">
        <q-card flat class="text-center text-grey" style="max-width: 250px">
          <q-avatar size="100px" icon="info_outline" />
          <q-card-section>Select something first</q-card-section>
        </q-card>
      </div>
      <router-view :key="$route.path" />
    </template>
  </ListDetailPage>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
