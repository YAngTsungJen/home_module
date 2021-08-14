<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top py-0 py-md-2">
      <div class="container-fluid container-md px-0 px-md-2">
        <h1 class="navbar-logo text-white">
          新森活
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">建案簡介</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">建築賞心</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vueslick">周邊環境</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
