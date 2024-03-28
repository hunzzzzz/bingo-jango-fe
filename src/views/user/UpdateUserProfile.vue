<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">내 프로필 수정</h2>
      <form @submit.prevent="updateUserProfile">
        <div class="form-group">
          <label for="name">이름</label>
          <input v-model="user.name" type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="nickname">닉네임</label>
          <input v-model="user.nickname" type="text" id="nickname" required>
        </div>
        <div class="form-group">
          <span>이메일</span>
          <span style="margin-left: 7px; color: red; font-size: 11px;">이메일 형식으로 입력 바랍니다</span>
          <input v-model="user.email" type="email" id="email" required>
        </div>
        <div class="form-group">
          <span>전화번호</span>
          <span style="margin-left: 7px; color: red; font-size: 11px;">예시) 010-1234-5678</span>
          <input v-model="user.phone" type="text" id="phone" required>
        </div>
        <div class="button-group">
          <button type="submit">수정하기</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'UpdateUserProfile',
  data() {
    return {
      user: {
        name: '',
        nickname: '',
        email: '',
        phone: '',
      }
    }
  },
  methods: {
    updateUserProfile() {
      const token = localStorage.getItem('accessToken');
      const apiUrl = "http://localhost:8080/users/change/profile";
      axios.patch(apiUrl, this.user, {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => {
            alert("수정 되었습니다.");
          })
          .catch(error => {
            const errorMessage = error.response && error.response.data.message;
            if (errorMessage === "존재하는 닉네임이에요.") {
              alert("존재하는 닉네임이에요.");
            } else if (errorMessage === "존재하는 이메일이에요."){
              alert("존재하는 이메일이에요.");
            } else {
              alert("회원수정 중 문제가 발생했습니다. 다시 시도해 주세요.");
            }
            console.error("회원수정 중 문제가 발생했습니다.", error);
          })
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