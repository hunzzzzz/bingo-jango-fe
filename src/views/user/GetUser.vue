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
        <img alt="프로필 이미지"
             class="profile_image"
             :src="imageSource"
        />
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
      imageSource: '',
    };
  },
  methods: {
    async getUser() {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:8080/users/${this.userId}`,
            {headers: {'Authorization': `Bearer ${token}`}});
        this.userProfile = response.data;
        this.imageSource = this.getImageSource();
      } catch (error) {
        console.error("프로필 조회 실패:", error);
        this.userProfile = null;
        this.imageSource = this.getImageSource(); // 에러 발생 시 기본 이미지로 업데이트
      }
    },
      getImageSource() {
        return this.userProfile && this.userProfile.image ? this.userProfile.image : require('@/assets/default-profile.png');
      },
    }
};
</script>,

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
  margin-bottom: 20px;
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
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

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px; /* 입력칸과 버튼 사이의 간격 조정 */
  border: 1px solid #ccc; /* 테두리 추가 */
  border-radius: 5px; /* 모서리를 둥글게 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* 내부 그림자 추가 */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; /* 부드러운 색상 변화 */
}

button:hover {
  background-color: #45a049;
}

</style>
