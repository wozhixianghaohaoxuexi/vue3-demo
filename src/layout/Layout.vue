<template>
  <Header />
  <section class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </section>
  <Footer />
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 0;
  background-color: $main;
  .container {
  position: relative;
  width: 960px;
  margin: 0 auto;
}
}
</style>