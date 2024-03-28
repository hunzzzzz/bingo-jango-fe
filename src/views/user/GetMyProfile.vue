<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">내 프로필 조회</h2>
      <div v-if="profile">
        <img alt="프로필 이미지"
             class="profile_image"
             :src="imageSource"
        />
        <p>이름: {{ profile.name }}</p>
        <p>닉네임: {{ profile.nickname }}</p>
        <p>이메일: {{ profile.email }}</p>
        <p>전화번호: {{ profile.phone }}</p>
        <p>가입일시: {{ profile.createdAt }}</p>
      </div>
      <div class="btns">
      <button @click="editProfile" class="btn">수정하기</button>
      <button @click="goBack" class="btn">뒤로가기</button>
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
      profile: null
    };
  },
  computed: {
    imageSource(){
      return this.profile.image != null ? this.profile.image : require('@/assets/default-profile.png')
    }
  },
  mounted() {
    this.getMyProfile();
  },
  methods: {
    getMyProfile() {
      const token = localStorage.getItem('accessToken');
      axios.get("http://localhost:8080/users/profile",
          {headers: {'Authorization': `Bearer ${token}`}})
          .then(response => {
            this.profile = response.data;
          }).catch(error => {
        console.error("프로필을 불러오는 데 실패했습니다.", error);
      });
    },
    editProfile() {
      // 프로필 수정 페이지로 이동
      this.$router.push('/update-user-profile');
    },
    goBack() {
      // 이전 페이지로 돌아가기
      this.$router.go(-1);
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

.profile_image {
  display: block;
  margin-bottom: 20px; /* 원하는 공백 크기 조절 */
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
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.btn {
  width: 45%; /* 버튼 너비를 줄여 두 버튼이 같은 줄에 위치하도록 함 */
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.btn:hover {
  background-color: #45a049;
}
</style>