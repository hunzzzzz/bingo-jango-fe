<template>
  <div class="main">
    <div class="box">
      <router-link to="get-profile">내 프로필 조회</router-link>
      <router-link to="get-user">타인 프로필 조회</router-link>
      <router-link to="update-user-password">비밀번호 변경</router-link>
      <router-link to="update-user-profile">내 프로필 수정</router-link>
      <router-link to="withdraw-user">회원탈퇴</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserMain'
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/family.jpg');
  background-size: cover;
  background-position: center;
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
}
</style>