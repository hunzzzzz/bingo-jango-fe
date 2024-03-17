<template>
  <div class="login-container">
    <div class="login">
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <label for="username">이메일</label>
          <input v-model="username" type="text" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input v-model="password" type="password" id="password" required>
        </div>
        <div class="button-group"> <!-- 버튼 그룹을 위한 div 추가 -->
          <button type="submit">로그인</button>
          <router-link to="/signup" button type="button">회원가입</router-link> <!-- 회원가입 버튼 추가 -->
        </div>
      </form>
      <div class="social-login-buttons">
        <a href="http://localhost:8080/oauth2/login/kakao">
          <img src="@/assets/kakao.jpg" alt="카카오 로그인" class="social-button">
        </a>
        <a href="http://localhost:8080/oauth2/login/naver">
          <img src="@/assets/naver.png" alt="네이버 로그인" class="social-button">
        </a>
        <a href="http://localhost:8080/oauth2/login/google">
          <img src="@/assets/google.png" alt="구글 로그인" class="social-button">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 전체 화면 높이 */
}

.login {
  background-color: white;
  width: 300px; /* 로그인 폼의 너비 */
  margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
  display: flex; /* flexbox를 사용하여 항목들을 세로로 정렬 */
  flex-direction: column; /* 항목들을 세로 방향으로 정렬 */
  align-items: center; /* 가운데 정렬 */
}

/* 추가된 스타일 */
.social-login-buttons {
  display: flex; /* Flexbox 사용 */
  justify-content: space-around; /* 버튼 간격을 균등하게 조정 */
  width: 100%; /* 부모 요소인 .login의 너비에 맞춤 */
}

.social-button {
  width: 80px; /* 버튼의 너비 */
  height: 80px; /* 버튼의 높이 */
  object-fit: cover; /* 이미지 비율을 유지하며 요소 채우기 */
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 전체 화면 높이 */
  background-image: url('@/assets/login.jpg'); /* 배경 이미지 설정 */
  background-size: cover; /* 배경 이미지를 컨테이너에 꽉 차도록 설정 */
  background-position: center; /* 배경 이미지를 중앙에 위치시킴 */
}

.button-group {
  display: flex; /* 버튼들을 옆으로 나란히 배열 */
  justify-content: space-around; /* 버튼 간격을 균등하게 조정 */
  width: 100%; /* 폼의 너비에 맞춤 */
}
</style>
