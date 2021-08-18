<template>
  <div class="banner bg-cover position-relative" style="background: center / cover no-repeat linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);">
    <nav class="navbar navbar-expand-md fixed-top opacity-90 py-2 px-2" :class="[classList['bg-color'], classList['navbar-color']]">
      <div class="container-fluid container-md px-0 px-md-2">
        <h1 class="navbar-logo">
          <router-link :class="classList['text-color']" to="/">捷登開發</router-link>
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item h4">
              <a class="nav-link pointer" :class="classList['text-color']" @click="scrollToTop(700)">建案簡介<span class="d-none d-lg-inline-block pb-1 ms-2" :class="classList['text-color']">|</span></a>
            </li>
            <li class="nav-item h4">
              <a class="nav-link pointer" :class="classList['text-color']" @click="scrollToTop(2300)">周邊環境</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="d-flex justify-content-center">
      <h2 class="h1 text-white text-center position-absolute top-25 ">不變的承諾，在台灣最美好的土地上扎根</h2>
      <h3 class="h4 text-white text-center position-absolute top-40">以追求永恆、前瞻的建築為理念，<br>
為台灣這塊土地營造優質的生活及高質感建築。</h3>
      <a href="#"  class="position-absolute top-75 down d-flex flex-column align-items-center"
          style="text-decoration: none;" @click.prevent="scrollToTop(700)">
        <p>往下看更多內容</p>
      </a>
      <button type="button" class="d-none d-lg-block btn btn-primary btn-lg text-white position-absolute start-75 top-78">預約專線：0919088776</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classList: {
        'bg-color': 'bg-secondary',
        'text-color': 'text-primary',
        'i-color': ''
      }
    }
  },
  methods: {
    scrollToTop (num) {
      window.scrollTo({
        top: num,
        behavior: 'smooth'
      })
    },
    scrollFunction () {
      const windowY = window.scrollY
      const innerHeight = window.innerHeight
      if (windowY > innerHeight) {
        this.classList = {
          'bg-color': 'bg-primary',
          'navbar-color': 'navbar-dark',
          'text-color': 'text-white'
        }
      } else {
        this.classList = {
          'bg-color': 'bg-secondary',
          'navbar-color': 'navbar-light',
          'text-color': 'text-green-tree'
        }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollFunction)
  }
}
</script>

<style scoped>
  .down p {
    color: white;
    text-align: center;
    margin-top: 5vh;
    font-size: 15px;
    font-weight: 800;
    opacity: 0.2;
    animation: fadeIn 1s infinite linear alternate;
  }
  @keyframes fadeIn {
    100% {
      opacity: 1;
    }
  }
</style>
