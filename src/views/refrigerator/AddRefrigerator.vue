<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">냉장고 생성</h2>
      <form @submit.prevent="addRefrigerator">
        <div class="form-group">
          <label for="name">냉장고 이름</label>
          <input type="text" id="name" v-model="refrigerator.name" required>
        </div>
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input type="password" id="password" v-model="refrigerator.password" required>
        </div>
        <div class="form-group">
          <label for="rePassword">비밀번호 확인</label>
          <input type="password" id="rePassword" v-model="refrigerator.rePassword" required>
        </div>
        <button type="submit">생성</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AddRefrigerator',
  data() {
    return {
      refrigerator: {
        name: '',
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    addRefrigerator() {
      if (this.refrigerator.password !== this.refrigerator.rePassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      // JWT 토큰을 로컬 스토리지에서 가져옵니다.
      const token = localStorage.getItem('accessToken');

      const submitForm = {
        name: this.refrigerator.name,
        password: this.refrigerator.password,
        rePassword: this.refrigerator.rePassword
      };
      axios.post('http://localhost:8080/api/v1/refrigerator', submitForm, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
          .then(response => {
            alert("냉장고가 생성되었습니다!");
          })
          .catch(error => {
            console.error("냉장고 생성 오류:", error);
            alert("냉장고 생성 중 문제가 발생했습니다. 다시 시도해 주세요.")
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
  background-image: url('@/assets/refrigerator2.jpg');
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
.form-group {
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"], input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
