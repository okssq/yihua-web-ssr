<template>
  <div class="tw-p-6">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      control-type="regular"
      control-color="primary"
      padding
      arrows
      height="300px"
      class="text-purple rounded-borders"
    >
      <q-carousel-slide name="1">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/gnss/common-01-01.png"></q-img>
      </q-carousel-slide>
    </q-carousel>
    <div class="tw-text-xl text-center q-py-md">技术参数</div>

    <div class="text-center tw-border-r tw-border-b tw-grid tw-grid-cols-5">
      <div class="tw-col-span-2 ttd">型号</div>
      <div class="tw-col-span-3 ttd">ST110B</div>
      <div class="tw-col-span-2 ttd">
        <div class="fit flex justify-center items-center">
          频率
        </div>
      </div>
      <div class="tw-col-span-3 ttd">
        <div>"GPS L1 1575.42MHz, C/A code</div>
        <div>北斗(COMPASS/BD2) B1 1564.098 MHz</div>
        <div>GLONASS 1602-0.525*K(Mhz)"</div>
      </div>
      <div class="tw-col-span-2 ttd">
        水平定位经度
      </div>
      <div class="tw-col-span-3 ttd">
        3m
      </div>
      <div class="tw-col-span-2 tw-grid tw-grid-cols-2 ">
        <div class="ttd">
          <div class="fit flex justify-center items-center">
            灵敏度
          </div>
        </div>
        <div>
          <div class="ttd">跟踪</div>
          <div class="ttd">重捕获</div>
          <div class="ttd">冷启动</div>
          <div class="ttd">热启动</div>
        </div>
      </div>
      <div class="tw-col-span-3">
        <div class="ttd">-162dBm</div>
        <div class="ttd">-159dBm</div>
        <div class="ttd">-148dBm</div>
        <div class="ttd">-155dBm</div>
      </div>
      <div class="tw-col-span-2 tw-grid tw-grid-cols-2 ">
        <div class="ttd">
          <div class="fit flex justify-center items-center">
            定位时间
          </div>

        </div>
        <div>
          <div class="ttd">热启动</div>
          <div class="ttd">A-GNSS辅助</div>
          <div class="ttd">冷启动</div>
        </div>
      </div>
      <div class="tw-col-span-3">
        <div class="ttd">1s</div>
        <div class="ttd">10s</div>
        <div class="ttd">29s</div>
      </div>
      <div class="tw-col-span-1 ttd">
        <div class="fit flex justify-center items-center">
           输出协议
        </div>
      </div>
      <div class="tw-col-span-4 ttd">
        <div>NMEA 0183</div>
        <div>9600 bps,8 data bits,no parity,1 stop bits(默认)</div>
        <div>1Hz;GGA,GLL,GSA,GSV,RMC,VTG</div>
      </div>
    </div>

  </div>

</template>

<script setup>
import {ref} from "vue";

const slide = ref('1')
</script>

<style scoped>
.ttd {
  @apply tw-border-t tw-border-l tw-py-4
}
</style>
