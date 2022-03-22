<template>
  <div class="tw-p-6">
    <div class="tw-text-xl q-py-md text-center">ZLD18智能户外瓶类回收箱PLUS</div>
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
        <q-img class="fit" fit="contain" src="~assets/imgs/product/smart/recycle-01-01.png"></q-img>
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
                <span>外形尺寸(mm)：</span>
                <span>1200*1652*2268</span>
              </div>
              <div class="row items-center">
                <span>投口尺寸(mm)：</span>
                <span>φ125</span>
              </div>
              <div class="row items-center">
                <span>一般箱体钢板厚度(mm)：</span>
                <span>1.0+</span>
              </div>
              <div class="row items-center">
                <span>加固位置钢板厚度(mm)：</span>
                <span>1.2+</span>
              </div>
              <div class="row items-center">
                <span>关键受力位置钢板厚度(mm)：</span>
                <span>5.0+</span>
              </div>
              <div class="row items-center">
                <span>整体最大容量(L)：</span>
                <span>620</span>
              </div>
              <div class="row items-center">
                <span>包装尺寸：</span>
                <span>气泡膜、珍珠棉</span>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        dense-toggle
        expand-separator
        label="标准配置"
        header-class="bg-blue-3 text-white tw-text-lg"
        expand-icon-class="text-white"
        group="seat"
      >
        <q-card>
          <q-card-section>
            <div class="q-gutter-y-sm column items-stretch text-grey-7 tw-text-lg ">
              <div>专业版3288中控系统</div>
              <div>瓶类投口防作弊功能</div>
              <div>瓶类投口指示灯</div>
              <div>32寸红外触摸屏</div>
              <div>智能换气功能模块</div>
              <div>瓶类投口计数功能</div>
              <div>防盗功能、满桶率提示</div>
              <div>二维码扫码模块</div>
              <div>单目摄像头</div>
              <div> 扬声器（2个）、电磁锁</div>
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
  width: 280px;
  text-align: right;
}
</style>
