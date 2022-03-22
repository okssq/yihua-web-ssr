<template>
  <q-carousel
    infinite
    animated
    autoplay
    v-model="slide"
    ref="carousel"
    height="100vh"
    class="text-center tw-font-bold tw-italic text-white tw-text-2xl sm:tw-text-4xl banner-font"
  >
    <q-carousel-slide name="1" img-src="~assets/imgs/home/banner-1.jpg">
      <div class="absolute-center tw-w-1/2">
        <p class="q-mt-md">高精度、精确定时GNSS芯片模块。</p>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="3" img-src="~assets/imgs/home/banner-3.jpg">
      <div class="absolute-center tw-w-1/2">
        <p class="q-mt-md">以人工智能为核心的商用车信息化、智能驾驶及安防解决方案提供商。</p>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="4" img-src="~assets/imgs/home/banner-4.jpg">
      <div class="absolute-center tw-w-1/2">
        <p class="q-mt-md" style="word-break:break-all;">Windows/Mac/ios/Android全平台数据管理后台支持。</p>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="2" img-src="~assets/imgs/home/banner-2.jpg">
      <div class="absolute-center tw-w-1/2">
        <p class="q-mt-md">一站式智慧城市硬件/服务一体化部署。</p>
      </div>
    </q-carousel-slide>
    <template #control>
      <div class="layout-container full-width absolute-center row justify-between">
        <q-btn round dense flat icon="keyboard_arrow_left" color="white" style="font-size: 1.5rem;"
               @click="$refs.carousel.previous()"/>
        <q-btn round dense flat icon="keyboard_arrow_right" color="white" style="font-size: 1.5rem;"
               @click="$refs.carousel.next()"/>
      </div>
    </template>
  </q-carousel>
  <div class="bg-grey-1">
    <div class="md:tw-flex items-center layout-container tw-py-4 md:tw-py-8">
      <div class="tw-shadow-lg bg-white tw-rounded tw-font-extrabold tw-p-4 md:tw-px-12 md:tw-py-16 lg:tw-px-16 lg:tw-py-20 xl:tw-px-20 xs:tw-py-32 text-grey-9 t md:tw-w-3/5">
        <div class="tw-text-xl md:tw-text-2xl">
          深圳翼华科技有限公司
        </div>
        <div class="tw-text-lg md:tw-text-xl">
          SHENZHEN YIHUA TECHNOLOGY
        </div>
        <div class="tw-text-lg bg-white  q-my-md text-grey-9">
          小振科技运用新技术与传统行业结合，辅助行业变革，实现降本增效。 关于营运车辆主动安全ADAS+疲劳预警系统与大数据分析应用服务，基于AI人工智能和大数据分析驾
          驶员行为，实现“人，车，路”三位一体化数据分析，创造智能安全驾驶新生态。同时将人工智能和 物联网技术应用到多个场景。 “赋能机器之眼，构建智慧大脑，主动安全无死角”
        </div>
      </div>
      <div class="bg-white md:tw-ml-4 tw-mt-4 md:tw-mt-0 tw-shadow-lg tw-rounded tw-p-4 tw-flex-1">
        <q-img src="~assets/imgs/home/company.jpg"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const carousel = ref(null)
const slide = ref('1')
</script>

<style scoped>

</style>
