<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">타인 프로필 조회</h2>
      <form @submit.prevent="getUser">
        <input v-model="userId" placeholder="사용자 ID를 입력하세요" />
        <button type="submit">조회</button>
      </form>
      <div v-if="userProfile">
        <h3>프로필 정보</h3>
        <p>닉네임: {{ userProfile.nickname }}</p>
        <p>이메일: {{ userProfile.email }}</p>
        <p>가입일시: {{ userProfile.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetUser',
  data() {
    return {
      userId: '',
      userProfile: null,
    };
  },
  methods: {
    async getUser() {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:8080/users/${this.userId}`,
            {headers: {'Authorization': `Bearer ${token}`}});
        this.userProfile = response.data;
      } catch (error) {
        console.error("프로필 조회 실패:", error);
        this.userProfile = null;
      }
    },
  },
};
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
  width: 450px;
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