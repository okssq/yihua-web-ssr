<template>
  <div class="layout-container tw-fixed tw-w-full tw-z-50 tw-transition-all" :class="headerClass"
       :style="{height: visible ? '100vh' : 'auto'}">
    <div class="flex no-wrap justify-between items-center">
      <img src="~assets/imgs/logo.png" alt="深圳翼华科技有限公司" :style="logoStyle"/>
      <div class="tw-hidden md:tw-inline-block">
        <!-- 右上角快捷小图标 -->
        <div class="q-pb-md" :class="{hidden: top>140}">
          <div class="q-gutter-sm text-right">
            <q-btn to="/contact-us" push class="bg-white" round icon="share_location" text-color="orange"/>
            <q-btn push class="bg-white" round icon="img:./email.png">
              <q-menu
                anchor="bottom middle"
                self="top middle"
                :offset="[0,10]"
                class="z-max bg-grey-1 shadow-9"
                transition-hide="fade"
                transition-show="fade"
              >
                <div class="q-pa-md">
                  <div class="tw-text-sm text-grey-7 q-mb-sm">商业咨询：王老板邮箱</div>
                  <div class="tw-text-sm text-grey-7">硬件咨询：超哥邮箱</div>
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
                <div class="q-pa-sm row items-center text-center text-bold text-grey-8">
                  <div>
                    <q-img src="~assets/imgs/qrcode.png" height="140px" width="140px"/>
                    <div>商务联系</div>
                  </div>
                  <q-separator vertical class="q-mx-sm"/>
                  <div>
                    <q-img src="~assets/imgs/qrcode.png" height="140px" width="140px"/>
                    <div>硬件联系</div>
                  </div>
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
                <div class="q-pa-md" style="min-width: 190px">
                  <div class="tw-text-sm text-grey-7 q-mb-sm">王先生：18616226707</div>
                  <div class="tw-text-sm text-grey-7">邹先生：13530309744</div>
                </div>
              </q-menu>
            </q-btn>
          </div>
        </div>
        <!-- 常规导航栏 -->
        <div class="q-gutter-md text-right">
          <q-btn :flat="top>140" to="/" color="white" :text-color="path === '/' ? 'primary' : 'grey-7'" label="首页"/>
          <q-btn :flat="top>140" to="/about-us" color="white"
                 :text-color="route.path.includes('about-us') ? 'primary' : 'grey-7'"
                 label="关于我们"/>
          <q-btn-dropdown menu-anchor="bottom middle"
                          menu-self="top middle"
                          :menu-offset="[0,12]" :flat="top>140" color="white"
                          :text-color="path.includes('product') ? 'primary' : 'grey-7'"
                          label="产品展示">
            <q-list style="width: 180px" padding separator>
              <q-item clickable to="/product/gnss"
                      :class="path.includes('/product/gnss') ? 'text-primary':'text-grey-7'">
                <q-item-section side>
                  <q-icon name="link" size="22px"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>GNSS模块</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable to="/product/plan"
                      :class="path.includes('/product/plan') ? 'text-primary':'text-grey-7'">
                <q-item-section side>
                  <q-icon name="link" size="22px"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>解决方案</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable to="/product/smart"
                      :class="path.includes('/product/smart') ? 'text-primary':'text-grey-7'">
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
      <!-- 小屏导航切换按钮 -->
      <q-btn class="tw-inline-flex md:tw-hidden" icon="menu" flat round color="grey-8" @click="$emit('menu-toggle')"/>
    </div>
    <!--  小屏导航栏-->
    <q-slide-transition appear v-show="visible">
      <div class="bg-white">
        <q-list padding class="text-right">
          <q-item clickable to="/" @click="$emit('menu-toggle')">
            <q-item-section>首页</q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable to="/about-us" @click="$emit('menu-toggle')">
            <q-item-section>关于我们</q-item-section>
          </q-item>
          <q-separator/>
          <q-expansion-item default-opened class="product-nav" label="产品展示">
            <q-list separator>
              <q-item clickable to="/product/gnss" @click="$emit('menu-toggle')">
                <q-item-section>GNSS模块</q-item-section>
              </q-item>
              <q-item clickable to="/product/plan" @click="$emit('menu-toggle')">
                <q-item-section>解决方案</q-item-section>
              </q-item>
              <q-item clickable to="/product/smart" @click="$emit('menu-toggle')">
                <q-item-section>智慧城市</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-separator/>
          <q-item clickable to="/news" @click="$emit('menu-toggle')">
            <q-item-section>行业资讯</q-item-section>
          </q-item>
          <q-separator/>
          <q-item clickable to="/contact-us" @click="$emit('menu-toggle')">
            <q-item-section>联系我们</q-item-section>
          </q-item>
          <q-separator/>
        </q-list>
      </div>
    </q-slide-transition>
  </div>
</template>

<script setup>

import {useRoute} from 'vue-router'
import {computed} from "vue";

const route = useRoute()
const path = computed(() => route.path)
const props = defineProps(['top', 'width', 'visible'])
const emit = defineEmits(['menu-toggle'])
const headerClass = computed(() => {
  if (props.width > 768 && props.top < 141) return 'tw-py-4'
  return 'bg-white tw-py-2 tw-shadow-md'
})
const logoStyle = computed(() => {
  if (props.width > 768 && props.top < 141) {
    return {
      width: '292px',
      filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 1px 1px 0px)'
    }
  }
  return {width: '146px',}
})

</script>
