<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">냉장고 초대코드 발송하기</h2>
      <form @submit.prevent="addRefrigerator">
        <div class="form-group">
          <label for="text">초대받을 유저의 이메일</label>
          <input type="text" id="invitationCode" v-model="refrigerator.invitationCode" required>
        </div>
        <button type="submit">초대코드 발송하기</button>
      </form>
    </div>
  </div>
</template>

<!--TODO: refrigeratorId 동적변수 처리 필요-->
<script>
import axios from "axios";

export default {
  name: 'SendInvitationCode',
  data() {
    return {
      refrigerator: {
        email: '',
      }
    }
  },
  methods: {
    addRefrigerator() {
      const refrigeratorId = this.$route.params.refrigeratorId;
      const token = localStorage.getItem('accessToken');

      const submitForm = {
        email: this.refrigerator.email,
      };
      axios.put('http://localhost:8080/refrigerator/${refrigeratorId}/member', submitForm, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
          .then(response => {
            alert("요청하신 이메일로 초대코드를 보냈습니다.");
          })
          .catch(error => {
            console.error("초대코드 발송 오류:", error);
            alert("초대코드 발송 중 문제가 발생했습니다. 다시 시도해 주세요.")
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
