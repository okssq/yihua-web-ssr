<template>
  <div>
    <q-carousel
      infinite
      animated
      autoplay
      v-model="slide"
      ref="carousel"
      height="100vh"
    >
      <q-carousel-slide name="first" img-src="~assets/b1.jpg">
        <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-2xl sm:tw-text-4xl banner-font">
          <p class="q-mt-md">为您提供项目最优方案。</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/b2.jpg">
        <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-2xl sm:tw-text-4xl banner-font">
          <p class="q-mt-md">一站式智能城市服务部署。</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/b3.jpg">
        <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-xl sm:tw-text-4xl banner-font">
          <p class="q-mt-md">以人工智能为核心的商用车信息化、智能驾驶及安防解决方案提供商。。</p>
        </div>
      </q-carousel-slide>
      <template #control>
        <div class="layout-container full-width absolute-center row justify-between">
          <q-btn round dense flat icon="keyboard_arrow_left" color="white" style="font-size: 1.5rem;" @click="$refs.carousel.previous()"/>
          <q-btn round dense flat icon="keyboard_arrow_right" color="white" style="font-size: 1.5rem;" @click="$refs.carousel.next()"/>
        </div>
      </template>
    </q-carousel>
  </div>
</template>

<script setup>
import {ref} from "vue";

const carousel = ref(null)
const slide = ref('first')
</script>

<style scoped>

</style>
