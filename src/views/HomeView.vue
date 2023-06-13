<script setup>
import { ref } from 'vue'
import { useFetch } from '../store/fetch.js'
import ListDetailPage from '../components/ListDetailPage.vue'

const selected = ref(null)
const { data } = useFetch()
</script>

<template>
  <ListDetailPage v-model="selected">
    <template #list>
      <div class="column no-wrap fit">
        <div class="col-auto">
          <q-toolbar class="bg-accent text-white q-pl-lg">
            <q-toolbar-title>List</q-toolbar-title>
          </q-toolbar>
        </div>
        <q-scroll-area class="col">
          <div v-if="data" class="q-py-md">
            <q-intersection v-for="item in data" :key="item.id" class="intersection-item" once>
              <q-item
                clickable
                class="q-px-lg"
                :active="selected && selected.id === item.id"
                @click="selected = item"
              >
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
      <div v-if="selected !== null" class="column no-wrap fit">
        <div class="col-auto">
          <q-toolbar class="bg-accent text-white">
            <q-btn flat round icon="arrow_back" class="lt-sm" @click="selected = null" />
            <q-toolbar-title>Detail</q-toolbar-title>
            <q-btn flat round icon="delete" />
            <q-btn flat round icon="save" />
          </q-toolbar>
        </div>
        <q-scroll-area class="col">
          <div class="q-py-md q-px-lg">
            <div class="text-h6">{{ selected.name }}</div>
            <p>{{ selected.email }}</p>
            <p v-for="n in 15" :key="n">{{ selected.body }}</p>
          </div>
        </q-scroll-area>
      </div>
    </template>
  </ListDetailPage>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
