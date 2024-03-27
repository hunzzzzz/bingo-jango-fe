<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">회원탈퇴</h2>
      <form @submit.prevent="withdrawUser">
        <!-- 탈퇴 확인 메시지 -->
        <p>정말로 빙고장고를 탈퇴 하시겠습니까?</p>
        <!-- 버튼 컨테이너 -->
        <div class="button-container">
          <!-- 예 버튼 -->
          <button type="button" @click="confirmWithdraw" class="left-button">예</button>
          <!-- 아니오 버튼 -->
          <button type="button" @click="cancelWithdraw" class="right-button">아니오</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {apiClient} from "@/api/client";

export default {
  name: 'WithdrawUser',
  methods: {
    async confirmWithdraw() {
      try {
        const response = await apiClient().put('/users/withdraw', {
          // 필요한 요청 본문을 추가합니다. 예: { reason: '...' }
        });
        alert(response.data); // 성공 메시지를 표시합니다.
        // 탈퇴 성공 후, 메인 페이지로 리다이렉트합니다.
        window.location.href = '/';
      } catch (error) {
        console.error("탈퇴 처리 중 에러 발생:", error);
        alert("탈퇴 처리 중 문제가 발생했습니다."); // 오류 메시지를 표시합니다.
      }
    },
    cancelWithdraw() {
      // 메인 페이지로 리다이렉트합니다.
      window.location.href = '/';
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
}

button:hover {
  background-color: #45a049;
}
</style>
