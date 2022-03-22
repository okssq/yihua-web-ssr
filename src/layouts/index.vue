<template>
  <q-scroll-area id="body-scroll" delay="100" class="fullscreen column no-wrap" @scroll="onScroll" ref="refScroll">
    <layout-header :top="top" :width="width" :visible="visible" @menu-toggle="onMenuToggle"/>
    <router-view/>
    <layout-footer/>
    <q-btn
      dense
      v-show="top > 500"
      push
      round
      color="blue"
      icon="vertical_align_top"
      class="fixed tw-z-40 tw-bottom-3 tw-right-3 md:tw-bottom-8 md:tw-right-8"
      @click="onScrollTop"
    />
  </q-scroll-area>
</template>

<script setup>
import LayoutHeader from './header'
import LayoutFooter from './footer'
import {ref, watch} from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
const refScroll = ref(null)
const top = ref(0)
const width = ref(0)
const visible = ref(false)
const onScroll = (report) => {
  top.value = report.verticalPosition
  width.value = report.horizontalContainerSize
  if (report.horizontalContainerSize > 768) {
    visible.value = false
  }
}
const onMenuToggle = () => {
  visible.value = !visible.value
}
const onScrollTop = () => {
  if(!refScroll.value) return
  refScroll.value.setScrollPosition("vertical", 0,300)
}
watch(
  () => route.path,
  () => {
    if(!refScroll.value) return
    refScroll.value.setScrollPosition("vertical", 0,300)
  }
)
</script>
