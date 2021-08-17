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
        'https://images.unsplash.com/photo-1628975720272-0d119f5432ae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1629016120324-7e08dab0bb5e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1629010307583-f27ae0f9662e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1629016120324-7e08dab0bb5e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1629015926131-5a346e14855f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1629010307583-f27ae0f9662e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1629015926131-5a346e14855f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1628951628200-ef62c0999fae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
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
