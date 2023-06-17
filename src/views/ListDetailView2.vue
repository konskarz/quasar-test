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
  if (screen.gt.sm) return (screen.width - 317) / 2
  if (screen.sm) return 300
  return screen.width
}
</script>

<template>
  <q-page>
    <q-layout view="lhr LpR lfr" container style="min-height: inherit">
      <q-header class="q-pt-md bg-white text-black">
        <q-toolbar class="q-pl-lg">
          <q-toolbar-title>List</q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        side="right"
        :breakpoint="599"
        show-if-above
        :width="drawerWidth($q.screen)"
        bordered
      >
        <div v-if="!store.selected" class="flex flex-center fit">
          <q-card flat class="text-center text-grey" style="max-width: 250px">
            <q-avatar size="100px" icon="info_outline" />
            <q-card-section>Select something first</q-card-section>
          </q-card>
        </div>
        <router-view :key="$route.path" />
      </q-drawer>
      <q-page-container>
        <q-page>
          <div v-if="store.data">
            <q-intersection
              v-for="item in store.data"
              :key="item.id"
              class="intersection-item"
              once
            >
              <q-item
                :to="{ name: 'comment', params: { id: item.id } }"
                exact
                class="q-px-lg"
                @click="drawer = true"
              >
                <q-item-section>
                  <q-item-label>{{ item.name }}</q-item-label>
                  <q-item-label caption>{{ item.email }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-intersection>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
37 changes: 37 additions & 0 deletions37
