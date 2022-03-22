<template>
  <div class="bg-banner relative-position">
    <div class="absolute-center text-center tw-font-bold tw-italic text-white tw-text-3xl sm:tw-text-5xl banner-font"
         style="margin-top: 40px">
      <p>INDUSTRY INFORMATION</p>
      <p class="q-mt-md">行业资讯</p>
    </div>
  </div>
  <div class="layout-container tw-py-4">
    <q-breadcrumbs gutter="sm" class="text-subtitle2 text-grey-7">
      <q-breadcrumbs-el label="首页" to="/" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="行业资讯" to="/news" class="hover:tw-text-black"/>
      <q-breadcrumbs-el label="资讯详情"/>
    </q-breadcrumbs>
  </div>
  <div class="layout-container tw-py-4 sm:tw-py-8" v-if="result">
    <div class="tw-text-2xl text-center">{{newsList[id]['title'] }}</div>
    <div class="text-right text-grey-7 q-my-lg">
      <span>{{ newsList[id]['source'] }}</span> | <span>{{ newsList[id]['time'] }}</span>

    </div>
    <div class="news" v-html="result.Content"></div>
    <div v-if="result.Content" style="border: 1px solid #FF6861;border-radius: 4px;padding: 20px;font-family: MicrosoftYaHei;font-size: 14px;color: #FF6861;line-height: 24px;margin-top: 30px;">
      特别声明：以上文章内容仅代表作者本人观点，不代表深圳翼华科技有限公司观点或立场。如有关于作品内容、版权或其它问题请于作品发表后的30日内与深圳翼华科技有限公司联系。
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import stringify from 'qs/lib/stringify';
import {shallowRef} from "vue";

const props = defineProps(['id']);
const newsList = {
  1:{
    title: '“北斗+高铁”！北斗铁路行业综合应用示范工程通过验收',
    time: '2022-03-17 19:22:00',
    source: '北京日报',
    url: 'https://t.cj.sina.com.cn/articles/view/1893892941/70e2834d020016ytv',
    img: 'http://n.sinaimg.cn/sinakd20220317s/718/w933h585/20220317/6d6b-d9edce9dc12836d2229eec8b71ce8f13.png'
  },
  2:{
    title: '中国北斗全球梦圆——写在北斗三号全球卫星导航系统全面建成之际',
    time: '2020-08-01 00:00:00',
    source: '新华社',
    url: 'http://www.infzm.com/contents/188966',
    img: 'http://images.infzm.com/cms/medias/image/20/08/01/06630abecf44f379d853d37f05fd1c71.jpeg',
  },
  3:{
    title: '下达1.15亿元！福建新建20个智慧公园 年底投用！',
    time: '2022-03-01 16:49:00',
    source: '人民资讯',
    url: 'https://k.sina.com.cn/article_7517400647_1c0126e4705902y240.html',
    img: 'https://n.sinaimg.cn/sinakd20117/267/w640h427/20220301/64f5-6ecce26d88b5e4dc76f517439d46b36d.jpg',
  },
}

const result = shallowRef(null)

const getDetail = (id) => {
  const param = {
    appkey: 'XYG8NFV7KVYW',
    url: newsList[id]['url'],
    contentwithhtml: true,
    htmlsourcecontent: true,
  }


  axios.post(
    'https://api.gugudata.com/news/fetchcontent',
    stringify(param),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }
  )
    .then(function (response) {
      const {Data, DataStatus} = response.data
      const {StatusCode} = DataStatus
      if (StatusCode === 100) {
        result.value = Data
      }
    })
    .catch(function (error) {
    });


}
getDetail(props.id)
</script>

<style scoped>
.bg-banner {
  height: 520px;
  background-size: cover;
  opacity: 0.8;
  background-position: center;
  background-image: url("~assets/imgs/news/bg.jpg");
}


</style>
