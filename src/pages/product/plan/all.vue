<template>
  <div class="product-banner"></div>
  <div class="layout-container q-py-lg">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7">
      <q-breadcrumbs-el label="首页" to="/" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="产品展示"/>
      <q-breadcrumbs-el label="解决方案"/>
    </q-breadcrumbs>
    <div class="tw-flex tw-flex-col q-mt-lg sm:tw-flex-row sm:tw-justify-between sm:tw-justify-stretch">
      <div class="sm:tw-w-1/4">
        <q-list
          class="q-pa-sm overflow-auto bg-white tw-shadow " style="max-height: 100%"
        >
          <template v-for="item in planList" :key="item.id">
            <q-item-label header class="bg-grey-2">{{ item.name }}</q-item-label>
            <q-item clickable v-ripple v-for="pItem in item.list" :key="pItem.id" :to="`/product/plan/${pItem.id}`">
              <q-item-section>
                <q-item-label :class="{'text-primary': route.path.includes(pItem.id)}">{{ pItem.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </div>

      <div class="bg-white tw-shadow tw-flex-grow sm:tw-ml-4" style="height: 600px;">
        <component :is="componentObj[pId]"></component>
      </div>
    </div>

  </div>
</template>

<script setup>
import {planList} from '../pruduct'
import {useRoute} from "vue-router";


const route = useRoute()
const props = defineProps(['pId'])
const componentObj = {
}

</script>
<style scoped>
.product-banner {
  height: 400px;
  background-image: url("~assets/product-bg.jpg");
  background-size: cover;
}
</style>
