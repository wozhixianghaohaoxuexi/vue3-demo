<template>
  login
  <router-link :to="{name: 'Home'}">路由跳转</router-link>
  <el-row class="mb-4 row">
    <el-button class="default">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<style scoped lang="scss">
  .row {
    .default {
      color: $info;
    }
  }
</style>