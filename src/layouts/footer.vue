<template>
  <div class="
    layout-container text-center grey-text bg-white
    tw-py-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4"
  >
    <div class="column items-center tw-my-4">
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
      <div class="q-my-sm">微信/WeiXin</div>
      <div class="tw-font-semibold">
        <div>
          邹先生(mark-zsc)
        </div>
        <div>
          王先生(wangjinrong347332)
        </div>
      </div>
    </div>
    <div class="column items-center tw-my-4">
      <q-btn push round icon="phone_enabled" text-color="blue" class="bg-white">
      </q-btn>
      <div class="q-my-sm">电话/Telphone</div>
      <div class="tw-font-semibold">
        <div>
          邹先生(13530309744)
        </div>
        <div>
          王先生(18616226707)
        </div>
      </div>
    </div>
    <div class="column items-center tw-my-4">
      <q-btn push class="bg-white" round icon="iconfont icon-email">
      </q-btn>
      <div class="q-my-sm">邮箱/Email</div>
      <div class="tw-font-semibold">
        <div>
          商务(0507ssq@gmail.com)
        </div>
        <div>
          硬件(0507ssq@gmail.com)
        </div>
      </div>
    </div>
    <div class="column items-center tw-my-4">
      <q-btn target="_blank"
             href="https://ditu.amap.com/search?query=%E6%98%8E%E5%90%9B%E5%95%86%E5%8A%A1%E4%B8%AD%E5%BF%83&city=440000&geoobj=109.838032%7C21.026053%7C118.690444%7C25.358739&zoom=7.84"
             push class="bg-white" round icon="share_location" text-color="orange"></q-btn>
      <div class="q-my-sm">地址/Address</div>
      <div class="tw-font-semibold tw-px-8">
        龙华区大浪深圳市龙华区浪荣路1号明君商务中心903A室
      </div>
    </div>
  </div>
  <q-separator style="background: rgb(243,244,246)"/>
  <div class="layout-container grey-text bg-white tw-py-4">
    <div class="text-center tw-text-xs tw-flex tw-flex-col tw-items-center md:tw-block md:tw-text-sm ">
      <span> Copyright ©2013-2022 深圳翼华科技有限公司版权所有</span>
      <a class="tw-ml-none md:tw-ml-4" href="https://beian.miit.gov.cn/">深ICP备19007050号-1</a>
    </div>
  </div>
</template>
<style scoped>
.grey-text {
  color: rgb(107, 114, 128)
}
</style>
