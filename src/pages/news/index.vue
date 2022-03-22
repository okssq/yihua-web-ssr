<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>INDUSTRY INFORMATION</p>
      <p class="q-mt-md">行业资讯</p>
    </div>
  </div>
  <div class="layout-container">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7 tw-py-6">
      <q-breadcrumbs-el label="首页" to="/" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="行业资讯"/>
    </q-breadcrumbs>
  </div>
  <div class="layout-container tw-shadow tw-py-4 ">
    <q-list padding separator class="bg-white">
      <q-item v-for="item in newsList" :key="item['id']" :to="`/news/${item['id']}`">
        <div class="news-img">
          <q-img :src="item.img" />
        </div>
        <q-item-section class="tw-pl-4 md:tw-px-12">
          <div>
            <div class="main-txt text-grey-9">{{ item.title }}</div>
            <div class="tip-txt text-right text-grey-8">
              <div>
                {{ item.source }}
              </div>
              <div>
                {{ item.time }}
              </div>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
const newsList = [
  {
    id: 1,
    title: '“北斗+高铁”！北斗铁路行业综合应用示范工程通过验收',
    time: '2022-03-17 19:22:00',
    source: '北京日报',
    url: 'https://t.cj.sina.com.cn/articles/view/1893892941/70e2834d020016ytv',
    img: 'http://n.sinaimg.cn/sinakd20220317s/718/w933h585/20220317/6d6b-d9edce9dc12836d2229eec8b71ce8f13.png'
  },
  {
    id: 2,
    title: '中国北斗全球梦圆——写在北斗三号全球卫星导航系统全面建成之际',
    time: '2020-08-01 00:00:00',
    source: '新华社',
    url: 'http://www.infzm.com/contents/188966',
    img: 'http://images.infzm.com/cms/medias/image/20/08/01/a43bf1492b24a69e8a07f788d495b14b.jpeg',
  },
  {
    id: 3,
    title: '下达1.15亿元！福建新建20个智慧公园 年底投用！',
    time: '2022-03-01 16:49:00',
    source: '人民资讯',
    url: 'https://k.sina.com.cn/article_7517400647_1c0126e4705902y240.html',
    img: 'https://n.sinaimg.cn/sinakd20117/267/w640h427/20220301/64f5-6ecce26d88b5e4dc76f517439d46b36d.jpg',
  },
]
</script>

<style scoped>
.bg-banner {
  height: 520px;
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-image: url("~assets/imgs/news/bg.jpg");
}
.news-img{
  @apply tw-w-32 sm:tw-w-44 md:tw-w-48 lg:tw-w-56 xl:tw-w-72
}
.main-txt {
  @apply
  tw-font-bold
  tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl
}

.tip-txt {
  @apply
  tw-pt-2 sm:tw-pt-4 md:tw-pt-6 lg:tw-pt-8
  tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg
}
</style>
