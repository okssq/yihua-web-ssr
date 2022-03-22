<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>GNSS PRODUCTS </p>
      <p class="q-mt-md">GNSS模块</p>
    </div>
  </div>
  <div class="layout-container q-py-lg">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7">
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
      <q-breadcrumbs-el label="GNSS模块" to="/product/gnss" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="产品列表"/>
    </q-breadcrumbs>
    <div class="tw-flex tw-flex-col q-mt-lg sm:tw-flex-row sm:tw-justify-between sm:tw-justify-stretch">
      <div class="sm:tw-w-1/4">
        <q-list class="overflow-auto bg-white tw-shadow tw-p-6" style="max-height: 100%">
          <template v-for="classItem in gnssList" :key="classItem.id">
            <q-item-label header class="bg-grey-2">{{ classItem.name }}</q-item-label>
            <q-item
              clickable
              v-ripple
              v-for="pItem in classItem.list"
              :key="pItem.id"
              :to="{
                path: '/product/gnss/list',
                query: {id:pItem.id}
              }"
            >
              <q-item-section>
                <q-item-label :class="id === pItem.id ? 'text-primary' : 'text-grey-7'">
                  {{ pItem.name }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </div>
      <div class="bg-white tw-shadow tw-flex-1 sm:tw-ml-4">
        <component :is="componentObj[id]"></component>
      </div>
    </div>
  </div>
</template>

<script setup>
import {gnssList} from '../pruduct'
import {useRoute} from "vue-router";
import GnssBase01 from './gnss-base-01.vue'
import GnssBase02 from './gnss-base-02.vue'
import {computed} from "vue";

const route = useRoute()
const id = computed(() => route.query.id)
const componentObj = {
  'gnss-base-01': GnssBase01,
  'gnss-base-02': GnssBase02,
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
