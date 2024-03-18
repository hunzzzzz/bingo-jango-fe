<template>
  <div class="main">
    <div class="box">
    빙고장고를 소개합니다. <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroduceMain'
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/main.jpg');
  background-size: cover;
  //background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.8); /* 오버레이 추가 */
}
.box {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  width: 400px;
}
</style>