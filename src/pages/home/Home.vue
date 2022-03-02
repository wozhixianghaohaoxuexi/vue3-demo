<template>
  <ul class="card-container">
    <li class="card" v-for="item in cardList" :key="item.id">
      <a :href="item.toUrl">
        <img :src="item.image" class="card-image" />

        <div class="card-content">{{ item.desc }}</div>
      </a>
    </li>
  </ul>
  <aside class="aside">aside</aside>
</template>

<script lang="ts" setup>
type Card = {
  id: number;
  image: string;
  desc: string;
  toUrl: string
}
const cardList: Array<Card> = [{
  id: 1,
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
  desc: '这是一段描述1',
  toUrl: 'https://www.baidu.com'
},
{
  id: 2,
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
  desc: '这是一段描述2',
  toUrl: 'https://www.baidu.com'
},
{
  id: 3,
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
  desc: '这是一段描述3',
  toUrl: 'https://www.baidu.com'
},
{
  id: 4,
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
  desc: '这是一段描述4',
  toUrl: 'https://www.baidu.com'
},
{
  id: 5,
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
  desc: '这是一段描述5',
  toUrl: 'https://www.baidu.com'
}, {
  id: 6,
  image: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
  desc: '这是一段描述6',
  toUrl: 'https://www.baidu.com'
}]
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}
.card-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 200px;
    margin-bottom: 14px;
    background-color: #ffffff;
    transition: all 0.3s;
    &:hover {
      margin-top: -2px;
      box-shadow: 0px 10px 30px rgba($color: #000000, $alpha: 0.2);
    }
    a {
      width: 100%;
      height: 100%;
    }
    .card-content {
      width: 180px;
    }
    .card-image {
      width: 150px;
      height: 100px;
    }
  }
}
.aside {
  position: absolute;
  left: 980px;
  top: 0;
  width: 200px;
  height: 400px;
  background-color: skyblue;
}
</style>
