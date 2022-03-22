<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>GNSS PRODUCTS </p>
      <p class="q-mt-md">GNSS模块</p>
    </div>
  </div>
  <div class="layout-container">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7 tw-py-6">
      <q-breadcrumbs-el label="首页" to="/" class="hover:tw-text-black"/>
      <q-breadcrumbs-el >
        <q-btn-dropdown padding="2px 0 2px 12px" flat color="grey-7" label="产品展示">
          <q-list>
            <q-item clickable v-close-popup to="/product/gnss">
              <q-item-section>
                <q-item-label>GNSS模块</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/product/plan" >
              <q-item-section>
                <q-item-label>解决方案</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/product/smart" >
              <q-item-section>
                <q-item-label>智慧城市</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-breadcrumbs-el>
      <q-breadcrumbs-el label="GNSS模块"/>
    </q-breadcrumbs>
  </div>
  <div class="layout-container tw-pb-4 md:tw-pb-12">
    <div class="q-mt-md" v-for="classItem in gnssList" :key="classItem.id">
      <div class="tw-text-lg tw-py-4">{{ classItem.name }}</div>
      <div
        class="tw-grid tw-grid-cols-1 tw-gap-8 md:tw-grid-cols-2 lg:tw-grid-cols-3 lg:tw-gap-6  xl:tw-grid-cols-4 xl:tw-gap-6">
        <div class="bg-white tw-border cursor-pointer" v-for="(pItem, pIndex) in classItem.list" :key="pIndex"
             @click="onHandleProduct(pItem)">
          <div class="overflow-hidden">
            <q-img class="p-img" :ratio="4/3" fit="contain" :src="pItem.src"/>
          </div>
          <q-separator/>
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-subtitle2 ellipsis">
                {{ pItem.name }}
              </div>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {gnssList} from '../pruduct'
import {useRouter} from "vue-router";

const router = useRouter()
const onHandleProduct = (pItem) => {
  const {id} = pItem
  router.push({
    path: '/product/gnss/list',
    query: {id}
  })
}
</script>

<style scoped>
.bg-banner {
  height: 520px;
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-image: url("~assets/imgs/product/gnss-bg.jpg");
}
</style>
