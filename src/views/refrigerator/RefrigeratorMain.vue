<template>
  <div class="main">
    <div class="box">
      <router-link to="refrigerator/add">냉장고 생성</router-link>
      <router-link to="refrigerator/{refrigeratorId}/invitation">냉장고 초대코드 발송하기</router-link>
      <router-link to="refrigerator/join/password">기존 냉장고 참여 (비밀번호 이용)</router-link>
      <router-link to="refrigerator/join/code">기존 냉장고 참여 (초대코드 이용)</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RefrigeratorMain'
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/refrigerator2.jpg');
  background-size: cover;
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
  display: flex; /* 플렉스 박스 사용 */
  flex-direction: column; /* 요소들을 세로로 정렬 */
  //align-items: center; /* 세로 중앙 정렬 */
}

</style>