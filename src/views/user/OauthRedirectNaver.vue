<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">네이버 로그인</h2>
      <form @submit.prevent="">
      </form>
    </div>
  </div>
</template>

<script>
import {apiClient} from "@/api/client";

export default {
  name: 'OauthRedirectNaver',
  mounted() {
    const code = new URL(window.location.href).searchParams.get("code");
    this.naver(code)
  },
  methods: {
    async naver(code) {
      try {
        const response = await apiClient.get('/oauth2/callback/naver', {
          params: { code }
        });
        // 일반 로그인 성공 시, 서버 응답으로부터 바로 토큰을 저장합니다.
        this.storeTokens(response.data.accessToken, response.data.refreshToken);
        localStorage.setItem('userId', response.data.userId);
        this.$router.push('/');
        setTimeout(() => {
          window.location.reload()
        })
      } catch (error) {
        console.error('로그인 실패:', error);
        // 이미 사용 중인 이메일로 인한 오류 처리
        if (error.response && error.response.data.message === "이미 사용 중인 이메일입니다.") {
          alert("이미 사용 중인 이메일입니다.");
        } else {
          // 기타 오류에 대한 처리
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
        this.$router.go(-1)
      }
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

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/family.jpg');
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.8);
}

.box {
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 400px;
}

.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>