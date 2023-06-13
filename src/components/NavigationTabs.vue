<script setup>
const props = defineProps({
  modelValue: { type: Array, required: true }
})
</script>

<template>
  <q-tabs>
    <q-route-tab
      v-for="(view, index) in props.modelValue"
      :key="index"
      :to="view.to"
      :icon="view.icon"
      :label="view.label"
      exact
    />
  </q-tabs>
</template>
