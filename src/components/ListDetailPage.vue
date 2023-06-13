<!-- https://m3.material.io/foundations/layout/canonical-layouts/list-detail -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Object, default: null }
})
const tab = computed(() => (props.modelValue === null ? 'list' : 'detail'))
function pageStyle(offset, height) {
  return { height: height - offset + 'px' }
}
</script>

<template>
  <q-page :style-fn="pageStyle">
    <q-tab-panels v-model="tab" animated keep-alive class="xs full-height">
      <q-tab-panel name="list" class="q-pa-none"><slot name="list" /></q-tab-panel>
      <q-tab-panel name="detail" class="q-pa-none"><slot name="detail" /></q-tab-panel>
    </q-tab-panels>
    <div class="gt-xs row no-wrap full-height">
      <div class="col col-lg-4 col-xl-3"><slot name="list" /></div>
      <div class="col">
        <slot name="detail">
          <div class="flex flex-center fit">
            <q-card flat class="text-center text-grey" style="max-width: 250px">
              <q-avatar size="100px" icon="info_outline" />
              <q-card-section>Select something first</q-card-section>
            </q-card>
          </div>
        </slot>
      </div>
    </div>
  </q-page>
</template>
