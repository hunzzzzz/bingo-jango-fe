<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">회원탈퇴</h2>
      <form @submit.prevent="confirmWithdraw">
        <p>정말로 빙고장고를 탈퇴 하시겠습니까?</p>
        <!-- 비밀번호 입력 필드 추가 -->
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요" class="password-input" />
        <div class="button-container">
          <button type="button" @click="confirmWithdraw" class="left-button">예</button>
          <button type="button" @click="cancelWithdraw" class="right-button">뒤로가기</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'WithdrawUser',
  data() {
    return {
      password: '',
    };
  },
  methods: {
    async confirmWithdraw() {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.put('http://localhost:8080/users/withdraw', {
          password: this.password,
        }, {
          headers: {'Authorization': `Bearer ${token}`}
        });
        alert(response.data);
        window.location.href = '/';
      } catch (error) {
        console.error("탈퇴 처리 중 에러 발생:", error);
        alert("탈퇴 처리 중 문제가 발생했습니다.");
      }
    },
    cancelWithdraw() {
      this.$router.go(-1);
    },
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

.button-container {
  display: flex;
  justify-content: space-between;
}

button {
  width: 48%; /* 버튼 너비를 줄여 두 버튼이 같은 줄에 위치하도록 함 */
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #45a049;
}

.password-input {
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

</style>
