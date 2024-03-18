<template>
  <div class="login-container">
    <div class="login">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">이메일</label>
          <input v-model="email" type="text" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input v-model="password" type="password" id="password" required>
        </div>
        <div class="button-group">
          <button type="submit">로그인</button>
          </div>
        <div>
          계정이 없으신가요?<router-link to="/signup" button type="button">회원가입</router-link>
        </div>
        <div>
          이메일을 잊으셨습니까?<router-link to="/forget-email">이메일찾기</router-link>
        </div>
        <div>
          비밀번호를 잊으셨습니까?<router-link to="/forget-password">비밀번호찾기</router-link>
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
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/users/login', {
          email: this.email,
          password: this.password,
        });
        if (response.data.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          // Vuex 등을 사용하여 로그인 상태를 관리하는 코드가 있다면 여기에 추가
          this.$router.push('/'); // 메인 화면으로 리디렉션. 여기서 '/'는 메인 페이지의 라우트를 가정한 것입니다.
        }
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    },//TODO 소셜로그인은 분기처리해야햄!!
  },
};
</script>



<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/login.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.1); /* 배경 이미지 위에 흰색 오버레이 추가 */
}

.login {
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 5px;
  width: 100%;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* 입력 필드의 패딩을 너비에 포함 */
}

.button-group button, .social-login-buttons a {
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
}

/* 로그인 및 회원가입 버튼 스타일 */
.button-group button {
  background-color: #007bff;
  color: white;
  width: 100%;
  margin: 20px 0px 20px 0px;
}

/* 소셜 로그인 버튼에 적용될 스타일 */
.social-login-buttons {
  margin-top: 20px;
}

.social-button {
  border-radius: 5px; /* 버튼의 모서리를 둥글게 */
  width: 60px; /* 버튼의 너비 조정 */
  height: 60px; /* 버튼의 높이 조정 */
}

/* 반응형 디자인: 화면 크기에 따라 요소 스타일 조정 */
@media (max-width: 768px) {
  .login-container {
    background-size: cover;
    padding: 20px;
  }
  .login {
    width: 100%; /* 화면이 작을 때는 폼의 너비를 확장 */
  }
}
</style>

