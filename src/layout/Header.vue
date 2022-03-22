<template>
  <header class="header">
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal">
      <h3>爷的网站</h3>
      <el-menu-item index="1">主页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>其他</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>

<style lang="scss" scoped>
.header {
  padding: 0 20px;
  .menu {
    background-color: $header;
    h3 {
      margin-right: 50px;
    }
  }
}
</style>