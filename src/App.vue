<template>
  <Layout v-if="route.name !== 'Login'" />
  <Login v-else />
</template>

<script lang="ts" setup>
  import Layout from './layout/Layout.vue'
  import Login from './pages/login/Login.vue'
  import {useRoute} from 'vue-router'
  const route = useRoute()
</script>

<style lang="scss">
@import "./assets/style/normalize.scss";

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  outline: none;

  &:after, &::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    outline: none;
  }
}
</style>
