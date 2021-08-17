<template>
  <div class="mb-5">
    <swiper :autoplay='{
    "delay": 1500,
    "disableOnInteraction": false
  }' :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect='{
    "rotate": 50,
    "stretch": 0,
    "depth": 100,
    "modifier": 1,
    "slideShadows": true
  }' :pagination="true" class="mySwiper">
      <swiper-slide v-for="(src, index) in imgs" :key="index">
        <img @click="showMultiple(index)" :src="src"/>
      </swiper-slide>
    </swiper>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>
<script>
import VueEasyLightbox from 'vue-easy-lightbox'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow, Pagination, Autoplay
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide,
    VueEasyLightbox
  },
  data () {
    return {
      imgs: [
        'https://img1.591.com.tw/house/2020/07/17/159497919404875707.jpg!fit.900x.water3.jpg',
        'https://img1.591.com.tw/house/2020/07/17/159497919501982603.jpg!fit.900x.water3.jpg',
        'https://img2.591.com.tw/house/2020/07/17/159497934576311003.jpg!fit.900x.water3.jpg',
        'https://img1.591.com.tw/house/2020/10/20/160317349103808100.jpg!fit.900x.water3.jpg',
        'https://img1.591.com.tw/house/2020/10/20/160317349182628400.jpg!fit.900x.water3.jpg',
        'https://img2.591.com.tw/house/2020/10/20/160317349270014702.jpg!fit.900x.water3.jpg',
        'https://img1.591.com.tw/house/2020/10/20/160317349349476408.jpg!fit.900x.water3.jpg',
        'https://img2.591.com.tw/house/2021/03/12/161551979425708408.jpg!fit.900x.water3.jpg',
        'https://img1.591.com.tw/house/2021/03/12/161551978596264608.jpg!fit.900x.water3.jpg',
        'https://img2.591.com.tw/house/2021/03/12/161551979482997005.jpg!fit.900x.water3.jpg',
        'https://img2.591.com.tw/house/2021/03/12/161551979223879404.jpg!fit.900x.water3.jpg'
      ],
      visible: false,
      index: 0 // default: 0
    }
  },
  methods: {
    showMultiple (index) {
      // allow mixing
      this.index = index // index of imgList
      this.show()
    },
    show () {
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 200px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>
