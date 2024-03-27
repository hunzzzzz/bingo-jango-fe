<template>
  <div class="forget-password-container">
    <div class="forget-password">
      <h2 class="form-title">비밀번호찾기</h2>
      <form @submit.prevent="forgetPassword">
        <div class="form-group">
          <label for="email">이메일</label>
          <input v-model="user.email" type="email" id="email" required>
        </div>
        <div class="button-group">
          <button type="submit">이메일로 임시비밀번호 받기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ForgetPassword',
  data() {
    return {
      user: {
        email: '',
      }
    };
  },
  methods: {
    forgetPassword() {
      const userData = {
        email: this.user.email,
      };

      axios.post('http://localhost:8080/users/finding/password', userData)
          .then(response => {
            alert("이메일로 임시 비밀번호를 보냈습니다.")
          })
          .catch(error => {
            console.error("비밀번호찾기 오류:", error);
            alert("일치하는 정보를 찾을 수 없습니다. 다시 시도해 주세요.")
          })
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
.forget-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/login.jpg');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.8);
}

.forget-password {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
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