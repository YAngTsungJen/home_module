<template>
  <div>
    <button @click="showMultiple">Show a group of pictures.</button>
    <!-- all props & events -->
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
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {
    VueEasyLightbox
  },
  data () {
    return {
      imgs: '',
      visible: false,
      index: 0 // default: 0
    }
  },
  methods: {
    showMultiple () {
      this.imgs = [
        { title: 'test img', src: 'https://images.unsplash.com/photo-1628975720272-0d119f5432ae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
        'https://images.unsplash.com/photo-1628951628200-ef62c0999fae?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
      ]
      // allow mixing
      this.index = 1 // index of imgList
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
