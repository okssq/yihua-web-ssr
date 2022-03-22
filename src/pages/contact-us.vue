<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>CONTACT US</p>
      <p class="q-mt-md">联系我们</p>
    </div>
  </div>
  <div class="layout-container">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7 tw-py-6">
      <q-breadcrumbs-el label="首页" to="/" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="关于我们"/>
    </q-breadcrumbs>
  </div>

  <div class="layout-container">
    <div class="tw-text-xl text-center tw-py-8 md:tw-text-2xl ">
      联系名片
    </div>
    <div class="tw-grid tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-4">
      <div class="card tw-font-bold text-grey-9 tw-rounded tw-p-8 tw-shadow hover:tw-shadow-lg">
        <div class="row justify-between items-center">
          <span class="tw-text-lg">邹世超</span>
          <span class="tw-text-md tw-font-normal text-grey-9">硬件工程师</span>
        </div>
        <div class="tw-text-md q-py-md">
          <div class="q-gutter-y-md">
            <div class="row items-center">
              <span>电话：</span>
              <span>13530309744</span>
            </div>
            <div class="row items-center">
              <span>邮箱：</span>
              <span>0507ssq@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card tw-font-bold text-grey-9 tw-rounded tw-p-8 tw-shadow hover:tw-shadow-lg">
        <div class="row justify-between items-center">
          <span class="tw-text-lg">王金荣</span>
          <span class="tw-text-md tw-font-normal text-grey-9">商务总监</span>
        </div>
        <div class="tw-text-md q-py-md">
          <div class="q-gutter-y-md">
            <div class="row items-center">
              <span>电话：</span>
              <span>18216226707</span>
            </div>
            <div class="row items-center">
              <span>邮箱：</span>
              <span>0507ssq@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card tw-font-bold text-grey-9 tw-rounded tw-p-8 tw-shadow hover:tw-shadow-lg">
        <div class="row justify-between items-center">
          <span class="tw-text-lg">马颖</span>
          <span class="tw-text-md tw-font-normal text-grey-9">销售总监</span>
        </div>
        <div class="tw-text-md q-py-md">
          <div class="q-gutter-y-md">
            <div class="row items-center">
              <span>电话：</span>
              <span>18649130945</span>
            </div>
            <div class="row items-center">
              <span>邮箱：</span>
              <span>0507ssq@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card tw-font-bold text-grey-9 tw-rounded tw-p-8 tw-shadow hover:tw-shadow-lg">
        <div class="row justify-between items-center">
          <span class="tw-text-lg">李文生</span>
          <span class="tw-text-md tw-font-normal text-grey-9">技术总监</span>
        </div>
        <div class="tw-text-md q-py-md">
          <div class="q-gutter-y-md">
            <div class="row items-center">
              <span>电话：</span>
              <span>18649130945</span>
            </div>
            <div class="row items-center">
              <span>邮箱：</span>
              <span>0507ssq@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="layout-container tw-my-6  md:tw-my-12  relative-position">
    <div class="tw-text-xl text-center  tw-py-8 md:tw-text-2xl ">
      地图位置
    </div>
    <div class="bg-white relative-position tw-shadow tw-rounded-md tw-p-4"  style="height:500px">
      <div class="fit" id="map">

      </div>
      <div class="absolute-center">
        <q-btn :loading="loading" :disable="loading" flat label="地图加载失败，请重试！" v-if="loadFailed"
               @click="renderMap"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import {onBeforeUnmount, onMounted, ref, shallowRef} from "vue";

export default {
  setup() {
    const map = shallowRef(null);
    const loadFailed = ref(false)
    const loading = ref(false)
    const renderMap = () => {
      loading.value = true
      if (map.value) {
        map.value.destroy()
      }
      setTimeout(() => {
        AMapLoader.load({
          key: "e8d109fb99779238b1cac35cbc0598e9",
          version: "2.0",
        })
          .then((AMap) => {
            map.value = new AMap.Map("map", {
              zoom: '18',
              viewMode: "3D",
            });
            map.value.on("complete", () => {
              const marker = new AMap.Marker({
                position: new AMap.LngLat(113.991435, 22.690755),
                icon: './gps.png',
                anchor: 'bottom-center',
              });
              map.value.add(marker);
              const infoWindow = new window.AMap.InfoWindow({
                isCustom: true,
                autoMove: false,
                content: `
                <div>
                  <div class="q-pa-lg text-black bg-white tw-shadow tw-rounded tw-text-md tw-font-bold">
                    <div>公司：深圳翼华科技有限公司</div>
                    <div>地址：深圳市龙华区浪荣路1号明君商务中心903A室</div>
                  </div>
                  <div class="tip-shadow relative-position"></div>
                </div>`,
                offset: new window.AMap.Pixel(0, -46),
              });
              infoWindow.open(map.value, [113.991435, 22.690755], 30);
              map.value.setZoomAndCenter(18, [113.991435, 22.690755], true, false)
              loading.value = false
              loadFailed.value = false
            });
          })
          .catch((err) => {
            loadFailed.value = true
            loading.value = false
          });
      }, 300)
    }

    onMounted(() => {
      renderMap()
    })
    onBeforeUnmount(() => {
      if (map.value) {
        map.value.destroy()
      }
    })

    return {
      map,
      loadFailed,
      loading,
      renderMap
    }
  }
}
</script>

<style scoped>
.bg-banner {
  height: 520px;
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-image: url("~assets/imgs/contact-us/bg.jpg");
}

.card {
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
}
</style>
