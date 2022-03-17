<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>CONTACT US</p>
      <p class="q-mt-md">联系我们</p>
    </div>
  </div>
  <div class="layout-container tw-my-6 text-grey-8  tw-grid tw-grid-cols-1 md:tw-grid-cols-9">
    <div class="bg-white tw-shadow tw-rounded-md tw-pb-6 md:tw-py-12 tw-px-6 md:tw-col-start-2 tw-col-span-5 q-py-md">
      <div class="q-gutter-y-md tw-text-md sm:tw-text-lg tw-mx-6 lg:tw-ml-24">
        <div class="tw-text-xl sm:tw-text-2xl">深圳翼华科技有限公司</div>
        <div class="row items-center">
          <q-icon name="phone" class="q-mr-sm"/>
          <span>手机：</span>
          <span>18216226707</span>
        </div>
        <div class="row items-center">
          <q-icon name="email" class="q-mr-sm"/>
          <span>邮箱：</span>
          <span>0507ssq@gmail.com</span>
        </div>
        <div class="row items-center">
          <q-icon name="language" class="q-mr-sm"/>
          <span>网址：</span>
          <span>wwww.ehuatech.com</span>
        </div>
      </div>

    </div>
    <div
      class="bg-white relative-position tw-shadow tw-rounded-md tw-p-4 tw-top-3.5 md:tw-col-start-4 md:tw-col-span-5 md:tw--top-5">
      <a target="_blank"
         href="https://ditu.amap.com/search?query=%E6%98%8E%E5%90%9B%E5%95%86%E5%8A%A1%E4%B8%AD%E5%BF%83&city=440000&geoobj=109.838032%7C21.026053%7C118.690444%7C25.358739&zoom=7.84">
        <q-img src="~assets/map.png" to></q-img>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.bg-banner {
  height: 520px;
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-image: url("~assets/cantact-us-bg.jpg");
}
</style>
