<template>
  <div
    class="layout-header layout-container"
    :class="(top>140 || width<576) ? 'q-py-xs bg-white tw-shadow' : 'q-py-md'"
  >
    <img src="~assets/logo1.png" alt="深圳翼华科技有限公司"
         :style="{width: (top>140 || width<576)  ? '146px': '292px',filter: top>140 || width<576? '' : 'drop-shadow(rgba(0, 0, 0, 0.2) 0px 2px 0px)'}">
    <div class="layout-header-side column items-end">
      <!--  右上角快捷小图标    -->
      <div class="q-pb-md" :class="{hidden: top>140}">
        <div class="q-gutter-sm">
          <q-btn target="_blank"
                 href="https://ditu.amap.com/search?query=%E6%98%8E%E5%90%9B%E5%95%86%E5%8A%A1%E4%B8%AD%E5%BF%83&city=440000&geoobj=109.838032%7C21.026053%7C118.690444%7C25.358739&zoom=7.84"
                 push class="bg-white" round icon="share_location" text-color="orange"></q-btn>
          <q-btn push class="bg-white" round icon="iconfont icon-email">
            <q-menu
              anchor="bottom middle"
              self="top middle"
              :offset="[0,10]"
              class="z-max bg-grey-1 shadow-9"
              transition-hide="fade"
              transition-show="fade"
            >
              <div class="q-pa-md">
                <div class="tw-text-sm text-grey-7 q-mb-sm">方案咨询：0507ssq@gmail.com</div>
                <div class="tw-text-sm text-grey-7">硬件咨询：0507ssq@gmail.com</div>
              </div>

            </q-menu>
          </q-btn>
          <q-btn push class="bg-white" round icon="iconfont icon-wx">
            <q-menu
              anchor="bottom middle"
              self="top middle"
              :offset="[0,10]"
              class="z-max bg-grey-1 shadow-9"
              transition-hide="fade"
              transition-show="fade"
            >
              <div class="q-pa-md">
                <q-img src="~assets/qrcode.png" height="140px" width="140px"/>
              </div>
            </q-menu>
          </q-btn>
          <q-btn push round icon="phone_enabled" text-color="blue" class="bg-white">
            <q-menu
              anchor="bottom middle"
              self="top middle"
              :offset="[0,10]"
              class="z-max bg-grey-1 shadow-9"
              transition-hide="fade"
              transition-show="fade"
            >
              <div class="q-pa-md">
                <div class="tw-text-sm text-grey-7 q-mb-sm">王先生：18616226707</div>
                <div class="tw-text-sm text-grey-7">邹先生：13530309744</div>
              </div>
            </q-menu>
          </q-btn>

        </div>
      </div>
      <!--   常规导航栏   -->
      <div class="q-gutter-md  row justify-end">
        <q-btn :flat="top>140" to="/" color="white" :text-color="route.path === '/' ? 'primary' : 'grey-7'" label="首页"/>
        <q-btn-dropdown menu-anchor="bottom middle"
                               menu-self="top middle"
                               :menu-offset="[0,12]" :flat="top>140" color="white"
               :text-color="route.path.includes('about-us') ? 'primary' : 'grey-7'" label="关于我们">

        </q-btn-dropdown>

        <q-btn-dropdown menu-anchor="bottom middle"
                        menu-self="top middle"
                        :menu-offset="[0,12]" :flat="top>140" color="white"
                        :text-color="route.path.includes('product') ? 'primary' : 'grey-7'"
                        label="产品展示">

          <q-list style="width: 180px" padding separator class="text-grey-7">
            <q-item clickable to="/product/gnss">
              <q-item-section side>
                <q-icon name="link" size="22px"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>GNSS模块</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable to="/product/plan">
              <q-item-section side>
                <q-icon name="link" size="22px"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>解决方案</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable to="/product/smart">
              <q-item-section side>
                <q-icon name="link" size="22px"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>智慧城市</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

        </q-btn-dropdown>
        <q-btn :flat="top>140" to="/news" color="white"
               :text-color="route.path.includes('news') ? 'primary' : 'grey-7'"
               label="行业资讯"/>
        <q-btn :flat="top>140" to="/contact-us" color="white"
               :text-color="route.path.includes('contact-us') ? 'primary' : 'grey-7'" label="联系我们"/>
      </div>
    </div>
    <q-btn icon="menu" flat round color="grey-8" class="layout-btn" @click="onMenuToggle"/>

  </div>
  <!--  小屏菜单-->
  <q-slide-transition appear v-show="visible">
    <div class="bg-white fixed z-top overflow-auto text-right" style="top: 60px;left: 0;right: 0;bottom: 0;">
      <q-list class="q-px-sm">
        <q-item clickable>
          <q-item-section>首页</q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable>
          <q-item-section>解决方案</q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable>
          <q-item-section>GNSS模块</q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable>
          <q-item-section>智慧城市</q-item-section>
        </q-item>
        <q-separator/>
        <q-item clickable>
          <q-item-section>关于我们</q-item-section>
        </q-item>
        <q-separator/>
      </q-list>
    </div>
  </q-slide-transition>
  <!--  拉到顶部-->
  <q-btn v-show="top > 400" push icon="vertical_align_top" round color="primary" class="fixed z-top"
         style="right: 50px;bottom: 50px;"/>

  <!--  监听屏幕变化-->
  <q-resize-observer @resize="onResize"/>
  <!--  监听滚动变化-->
  <q-scroll-observer @scroll="onScroll"/>
</template>

<script setup>
import {ref} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const visible = ref(false)
const top = ref(0)
const width = ref(0)
const onMenuToggle = () => {
  visible.value = !visible.value
}
const onResize = (report) => {
  width.value = report.width
  if (report.width > 576) {
    visible.value = false
  }
}
const onScroll = (scroll) => {
  const {position} = scroll
  const {top: t} = position
  top.value = t
}
</script>

<style scoped>
.layout-header {
  @apply
  tw-fixed  tw-w-full tw-flex tw-flex-nowrap tw-justify-between tw-items-center
  tw-z-50 tw-transition-all
}

.layout-header-side {
  @apply sm:tw-inline-flex tw-hidden
}

.layout-navs > span {
  @apply tw-inline-block tw-w-24 tw-py-3 tw-ml-2 tw-bg-gray-50
}

.layout-btn {
  @apply sm:tw-hidden tw-inline-flex
}
</style>
