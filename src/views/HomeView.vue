<template>
  <div class="hello">
  <div class="center-text1">BingoJango</div>
  <div class="center-text2">여러분의 소중한 냉장고를 지켜드립니다.</div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.hello {
  background-image: url('https://cdn.pixabay.com/photo/2016/09/04/21/34/owl-1645310_1280.jpg');
  background-size: cover;
  height: 90vh;
  position: relative;
}
.center-text1 {
  position: absolute; /* 절대 위치 설정 */
  top: 40%; /* 상단으로부터 40% 위치 */
  left: 50%; /* 좌측으로부터 50% 위치 */
  transform: translate(-50%, -50%); /* 자신의 크기에 따라 중앙 정렬 */
  color: #fff; /* 텍스트 색상 */
  font-size: 4rem; /* 텍스트 크기 */
  font-weight: bold; /* 텍스트 굵기 */
}
.center-text2 {
  position: absolute; /* 절대 위치 설정 */
  top: 47%; /* 상단으로부터 50% 위치 */
  left: 50%; /* 좌측으로부터 50% 위치 */
  transform: translate(-50%, -50%); /* 자신의 크기에 따라 중앙 정렬 */
  color: #fff; /* 텍스트 색상 */
  font-size: 2rem; /* 텍스트 크기 */
  font-weight: bold; /* 텍스트 굵기 */
}
</style>
