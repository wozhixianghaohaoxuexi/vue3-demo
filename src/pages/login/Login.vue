<template>
  login
  <router-link :to="{ name: 'Home' }">路由跳转</router-link>
  <el-row class="mb-4 row">
    <el-button class="default">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>

  <div ref="box" class="divbox">11</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const box: HTMLElement = ref(null).value!;
let isMove: boolean = false;
let x: number, y: number;
onMounted(() => {
  box.addEventListener('mousedown', (e: MouseEvent): void => {
    isMove = true;
    x = e.clientX - box.offsetLeft;
    y = e.clientY - box.offsetTop;
    console.log('down', box.clientLeft, box.offsetTop);
  })
  box.addEventListener('mousemove', (e: MouseEvent): void => {
    if (isMove) {
      console.log('move', e.clientX, e.clientY);
      box.style.left = `${e.clientX - x}px`;
      box.style.top = `${e.clientY - y}px`;
    }
  })
  box.addEventListener('mouseup', () => {
    box.removeEventListener('mousedown', (): void => { });
    box.removeEventListener('mousemove', (): void => { });
    isMove = false;
    console.log('up');
  })
});
</script>

<style scoped lang="scss">
.row {
  .default {
    color: $info;
  }
}
.divbox {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  position: absolute;
}
</style>