<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">비밀번호 변경</h2>
      <form @submit.prevent="updateUserPassword">
        <div class="form-group">
          <input type="password" v-model="password" placeholder="현재 비밀번호" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="newPassword" placeholder="새 비밀번호" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="reNewPassword" placeholder="새 비밀번호 확인" required>
        </div>
        <button type="submit">비밀번호 변경</button>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'UpdateUserPassword',
  data() {
    return {
      password: '',
      newPassword: '',
      reNewPassword: ''
    };
  },
  methods: {
    updateUserPassword() {
      const token = localStorage.getItem('accessToken');
      const apiUrl = "http://localhost:8080/users/mypage/change-pwd";
      axios.patch(apiUrl, {
        password: this.password,
        newPassword: this.newPassword,
        reNewPassword: this.reNewPassword
      }, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => {
            alert("비밀번호가 성공적으로 변경되었습니다.");
          })
          .catch(error => {
            console.error("비밀번호 변경에 실패했습니다.", error);
          });
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