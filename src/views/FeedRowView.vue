<script setup>
import { useFetch } from '../store/fetch.js'

const { data } = useFetch()
</script>

<template>
  <q-page style="padding-top: 66px">
    <div v-if="data" class="row">
      <q-intersection
        v-for="item in data"
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
    <q-page-sticky expand position="top">
      <q-toolbar class="bg-accent text-white q-pl-lg">
        <q-toolbar-title>Feed row</q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<style scoped>
.intersection-item {
  min-height: 51.19px;
}
</style>
