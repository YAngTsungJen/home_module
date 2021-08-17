<template>
  <div class="banner bg-cover position-relative" style="background: center / cover no-repeat linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1449844908441-8829872d2607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);">
    <nav class="navbar navbar-expand-md navbar-dark bg-transparent py-2 px-2">
      <div class="container-fluid container-md px-0 px-md-2">
        <h1 class="navbar-logo text-white">
          捷登開發
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item h3">
              <router-link class="nav-link" to="/">建案簡介</router-link>
            </li>
            <li class="nav-item h3">
              <router-link class="nav-link" to="/about">建築賞心</router-link>
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
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop (num) {
      window.scrollTo({
        top: num,
        behavior: 'smooth'
      })
    }
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
