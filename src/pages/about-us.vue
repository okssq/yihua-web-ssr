<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>ABOUT US</p>
      <p class="q-mt-md">关于我们</p>
    </div>
  </div>
  <div class="layout-container">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7 tw-py-6">
      <q-breadcrumbs-el label="首页" to="/" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="关于我们"/>
    </q-breadcrumbs>
  </div>

  <div class="bg-white tw-mb-4 tw-py-4 md:tw-mb-12 md:tw-py-8">
    <div class="layout-container">

      <q-img src="~assets/imgs/home/company.jpg" img-class="my-custom-image" height="500px">
        <div class="absolute-full">
          <div class="absolute-center banner-font tw-font-extrabold">
            <div class="tw-text-xl md:tw-text-2xl">
              深圳翼华科技有限公司
            </div>
            <div class="text-no-wrap tw-text-xl md:tw-text-2xl">
              SHENZHEN YIHUA TECHNOLOGY
            </div>
            <div class="tw-text-lg  q-my-md">
              小振科技运用新技术与传统行业结合，辅助行业变革，实现降本增效。 关于营运车辆主动安全ADAS+疲劳预警系统与大数据分析应用服务，基于AI人工智能和大数据分析驾
              驶员行为，实现“人，车，路”三位一体化数据分析，创造智能安全驾驶新生态。同时将人工智能和 物联网技术应用到多个场景。 “赋能机器之眼，构建智慧大脑，主动安全无死角”
            </div>
          </div>

        </div>
      </q-img>
    </div>
  </div>
  <div class="bg-white tw-my-4 tw-py-4 md:tw-my-12 md:tw-py-8">
    <div class="layout-container">
      <div class="tw-text-xl md:tw-text-2xl">
        我们的环境
      </div>
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-py-4">
        <q-img src="~assets/imgs/about-us/1.png"></q-img>
        <q-img src="~assets/imgs/about-us/2.png"></q-img>
        <q-img src="~assets/imgs/about-us/3.png"></q-img>
        <q-img src="~assets/imgs/about-us/4.jpg"></q-img>
        <q-img src="~assets/imgs/about-us/5.png"></q-img>
        <q-img src="~assets/imgs/about-us/6.png"></q-img>
      </div>
    </div>
  </div>
<!--  <div class="bg-white tw-my-4 tw-py-4 md:tw-my-12 md:tw-py-8">-->
<!--    <div class="layout-container">-->
<!--      <div class="tw-text-xl md:tw-text-2xl">-->
<!--        我们的荣誉-->
<!--      </div>-->
<!--      <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4 tw-py-4">-->
<!--        <q-img :ratio="3/4" fit="cover" src="~assets/imgs/h1.jpg"></q-img>-->
<!--        <q-img :ratio="3/4" fit="cover" src="~assets/imgs/h2.jpg"></q-img>-->
<!--        <q-img :ratio="3/4" fit="cover" src="~assets/imgs/h3.jpg"></q-img>-->
<!--        <q-img :ratio="3/4" fit="cover" src="~assets/imgs/h4.jpg"></q-img>-->
<!--      </div>-->
<!--    </div>-->

<!--  </div>-->
</template>

<script setup>
</script>
<style scoped>
.bg-banner {
  height: 520px;
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-image: url("~assets/imgs/about-us/bg.jpg");
}

</style>
