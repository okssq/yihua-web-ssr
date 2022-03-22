<template>
  <div class="tw-p-6">
    <div class="tw-text-xl q-py-md text-center">人脸识别储物柜</div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      infinite
      padding
      arrows
      height="400px"
      control-color="grey-7"
    >
      <q-carousel-slide name="1">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/locker-01-01.jpg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="2">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/locker-01-02.jpg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="3">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/locker-01-03.jpg"></q-img>
      </q-carousel-slide>
    </q-carousel>
    <q-list padding class="rounded-borders">
      <q-expansion-item
        dense-toggle
        expand-separator
        label="参数配置"
        header-class="bg-blue-3 text-white tw-text-lg"
        expand-icon-class="text-white"
        default-opened
        group="seat"
      >
        <q-card>
          <q-card-section>
            <div class="q-gutter-y-sm column items-stretch text-grey-7 tw-text-lg ">
              <div>24门开闭门柜体（含屏幕占两个格子）；</div>
              <div>17寸高清触控大屏，分辨率1280*1024，2000亮度；</div>
              <div>箱门控制、电控锁、电源；</div>
              <div>主板使用网口上报数据（安卓板）；</div>
              <div>带摄像头；</div>
              <div>led灯两个；</div>
              <div>带雨棚；</div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
import {ref} from "vue";

const slide = ref('1')
</script>

<style scoped>
.row > span:first-child {
  width: 160px;
  text-align: right;
}
</style>
