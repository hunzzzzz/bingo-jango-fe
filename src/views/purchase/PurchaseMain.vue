<template>
  <div class="main">
    <div class="box">
      같이구매를 눌렀을 때의 메인페이지
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurchaseMain'
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/dessert.jpg');
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