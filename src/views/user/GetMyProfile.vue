<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">내 프로필 조회</h2>
      <div v-if="profile">
        <p><strong>이름:</strong> {{ profile.name }}</p>
        <p><strong>닉네임:</strong> {{ profile.nickname }}</p>
        <p><strong>이메일:</strong> {{ profile.email }}</p>
        <p><strong>전화번호:</strong> {{ profile.phone }}</p>
        <p v-for="(index, item) in profile.refrigerators" :key = "index"><strong>냉장고:</strong> {{ index.name }}</p>
        <p><strong>가입일시:</strong> {{ profile.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'GetMyProfile',
  data() {
    return {
      profile: null,
    };
  },
  mounted() {
    this.getMyProfile();

  },
  methods: {
    getMyProfile() {
      const token = localStorage.getItem('accessToken');
      axios.get("http://localhost:8080/users/me", {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => {
            this.profile = response.data;
            this.profile.refrigerators = response.data.refrigerators
            console.log(response.data)
          }).catch(error => {
        console.error("프로필을 불러오는 데 실패했습니다.", error);
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
</style>