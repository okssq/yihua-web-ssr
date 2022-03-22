<template>
  <div class="tw-p-6">
    <div class="tw-text-xl q-py-md text-center">太阳能座椅WYC2003</div>
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
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/seat-02-01.jpeg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="2">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/seat-02-02.jpeg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="3">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/seat-02-03.jpeg"></q-img>
      </q-carousel-slide>
      <q-carousel-slide name="4">
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/seat-02-04.jpeg"></q-img>
      </q-carousel-slide>
    </q-carousel>
    <q-list padding class="rounded-borders">
      <q-expansion-item
        dense-toggle
        expand-separator
        label="技术参数"
        header-class="bg-blue-3 text-white tw-text-lg"
        expand-icon-class="text-white"
        default-opened
        group="seat"
      >
        <q-card>
          <q-card-section>
            <div class="q-gutter-y-sm column items-stretch text-grey-7 tw-text-lg ">
              <div class="row items-center">
                <span>规格：</span>
                <span>长2000mm,宽1200mm，高2200mm</span>
              </div>
              <div class="row items-center">
                <span>材质：</span>
                <span>镀锌钢板/不锈钢板</span>
              </div>
              <div class="row items-center">
                <span>颜色：</span>
                <span>灰色/深蓝色/自定义颜色</span>
              </div>
              <div class="row items-center">
                <span>生产工艺：</span>
                <span>板材折弯、焊接、打磨、烤漆、装配、测试、包装</span>
              </div>
              <div class="row items-center">
                <span>供能方式：</span>
                <span>市电/太阳能</span>
              </div>
              <div class="row items-center">
                <span>太阳能板：</span>
                <span>单晶硅光伏板 90W</span>
              </div>
              <div class="row items-center">
                <span>蓄电池：</span>
                <span>三元锂电池 12V/55AH</span>
              </div>
              <div class="row items-center">
                <span>USB充电：</span>
                <span>5V/3.0快充2PCS</span>
              </div>
              <div class="row items-center">
                <span>无线充电：</span>
                <span>5V/2.0 无线充2PCS</span>
              </div>
              <div class="row items-center">
                <span>LED亮灯方式：</span>
                <span>时间控制/感应开灯</span>
              </div>
              <div class="row items-center">
                <span>无线WiFi：</span>
                <span>工业级2.4GHz/150MBPS</span>
              </div>
              <div class="row items-center">
                <span>音响设备：</span>
                <span>蓝牙音箱12V/0.84A 45Hz-18KHz</span>
              </div>
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
