<template>
  <div class="forget-email-container">
    <div class="forget-email">
      <h2 class="form-title">이메일찾기</h2>
      <form @submit.prevent="forgetEmail">
        <div class="form-group">
          <label for="name">이름</label>
          <input v-model="user.name" type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="phone">전화번호</label>
          <input v-model="user.phone" type="text" id="phone" required>
        </div>
        <div class="button-group">
          <button type="submit">이메일 찾기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'ForgetEmail',
  data() {
    return {
      user: {
        name: '',
        phone: '',
      }
    };
  },
  methods: {
    forgetEmail() {
      const userData = {
        name: this.user.name,
        phone: this.user.phone,
      };

      axios.post('http://localhost:8080/users/finding/email', userData)
          .then(response => {
            alert(`이메일은 ${response.data.hiddenEmail} 입니다.`)
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
.forget-email-container {
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

.forget-email {
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