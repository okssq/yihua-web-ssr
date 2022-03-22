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
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/screen-01-01.png"></q-img>
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
                <span>屏的规格：</span>
                <span>LG-43寸高亮竖屏，2000亮度</span>
              </div>
              <div class="row items-center">
                <span>触摸规格：</span>
                <span>纳米触摸；</span>
              </div>
              <div class="row items-center">
                <span>整机散热方式：</span>
                <span>风冷；</span>
              </div>
              <div class="row items-center">
                <span>温度感应传感器：</span>
                <span>支持；</span>
              </div>
              <div class="row items-center">
                <span>光感应传感器：</span>
                <span>支持；</span>
              </div>
              <div class="row items-center">
                <span>喇叭：</span>
                <span>2*10W防水喇叭；</span>
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
