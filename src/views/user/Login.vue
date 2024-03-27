<template>
  <div class="login-container">
    <div class="login">
      <h2 class="form-title">로그인</h2>
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
        <a @click.prevent="loginWithKakao">
          <img src="@/assets/kakao.jpg" alt="카카오 로그인" class="social-button">
        </a>
        <a @click.prevent="loginWithNaver">
          <img src="@/assets/naver.png" alt="네이버 로그인" class="social-button">
        </a>
        <a @click.prevent="loginWithGoogle">
          <img src="@/assets/google.png" alt="구글 로그인" class="social-button">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {apiClient} from "@/api/client";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  mounted() {
    this.checkAndStoreTokens();
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/users/login', {
          email: this.email,
          password: this.password,
        });
        // 일반 로그인 성공 시, 서버 응답으로부터 바로 토큰을 저장합니다.
        this.storeTokens(response.data.accessToken, response.data.refreshToken);
        this.$router.push('/');
        setTimeout(() => {
          window.location.reload()
        })
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    },
    loginWithKakao() {
      const REST_API_KEY = "77eb598dd69f9cdf9cb1a78ae6de2736"
      const REDIRECT_URI = "http://localhost:9090/oauth-redirect-kakao"
      const url = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=' + REST_API_KEY + "&redirect_uri=" + REDIRECT_URI;
      window.location.href = url;
    },
    loginWithNaver() {
      const NAVER_CLIENT_ID = "BKM2749mUdNUKWATyBA4"
      const NAVER_REDIRECT_URL = "http://localhost:9090/oauth-redirect-naver"
      const url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + NAVER_CLIENT_ID + '&redirect_uri=' + NAVER_REDIRECT_URL;
      window.location.href = url;
    },
    loginWithGoogle() {
      const GOOGLE_CLIENT_ID = "760489652625-stb1of1r5qn0ac8ou08kormuq4t2i9c4.apps.googleusercontent.com"
      const GOOGLE_REDIRECT_URL = "http://localhost:9090/oauth-redirect-google"
      const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + GOOGLE_CLIENT_ID + '&redirect_uri=' + GOOGLE_REDIRECT_URL + '&response_type=code' + '&scope=email profile';
      window.location.href = url;
    },
    checkAndStoreTokens() {
      const accessToken = this.getCookie('accessToken');
      const refreshToken = this.getCookie('refreshToken');
      if (accessToken && refreshToken) {
        this.storeTokens(accessToken, refreshToken);
      }
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    },
    storeTokens(accessToken, refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }
  }
}
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
  background-color: rgba(0, 0, 0, 0.8); /* 오버레이 추가 */
}

.login {
  padding: 30px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  width: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
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