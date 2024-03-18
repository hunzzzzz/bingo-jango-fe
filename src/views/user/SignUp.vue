<template>
  <div class="signup-container">
    <div class="signup">
        <h2 class="form-title">회원가입</h2>
      <form @submit.prevent="signUp">
        <div class="form-group">
          <label for="name">이름</label>
          <input v-model="user.name" type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="nickname">닉네임</label>
          <input v-model="user.nickname" type="text" id="nickname" required>
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <input v-model="user.email" type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="phone">전화번호</label>
          <input v-model="user.phone" type="text" id="phone" required>
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input v-model="user.password" type="password" id="password" required>
        </div>
        <div class="form-group">
          <label for="passwordConfirm">비밀번호 확인</label>
          <input v-model="user.passwordConfirm" type="password" id="passwordConfirm" required>
        </div>
        <div class="button-group">
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        name: '',
        nickname: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: '',
      }
    };
  },
  methods: {
    signUp() {
      // 비밀번호 확인 로직
      if (this.user.password !== this.user.passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      // 사용자 데이터 구성
      const userData = {
        name: this.user.name,
        nickname: this.user.nickname,
        email: this.user.email,
        phone: this.user.phone,
        password: this.user.password,
        passwordConfirm: this.user.passwordConfirm
      };

      // 회원가입 요청
      axios.post('http://localhost:8080/api/v1/users/signup', userData)
          .then(response => {
            alert("회원가입이 완료되었습니다.");
            this.$router.push('/'); // 메인 페이지로 리다이렉션
          })
          .catch(error => {
            console.error("회원가입 오류:", error);
            alert("회원가입 중 문제가 발생했습니다. 다시 시도해 주세요.");
          });
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/login.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.1);
}

.signup {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.form-group label {
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  width: 100%;
  display: flex;
  justify-content: center;
}

.button-group button {
  width: 100%;
  padding: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button-group button:hover {
  background-color: #0056b3;
}
</style>
