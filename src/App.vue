<template>
  <header class="site-header">
    <div class="container">
      <router-link to="/" class="brand">BingoJango</router-link>
      <nav class="navigation">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/introduce" class="nav-link">소개</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/refrigerator" class="nav-link">냉장고</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/food" class="nav-link">음식</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chat" class="nav-link">채팅방</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vote" class="nav-link">투표</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/purchase" class="nav-link">같이구매</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link">마이페이지</router-link>
          </li>
        </ul>
      </nav>
      <button v-if="isLoggedIn" @click="logout" class="auth-button">로그아웃</button>
      <router-link v-else to="/login" class="auth-button">로그인</router-link>
    </div>
  </header>
  <router-view/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const router = useRouter();

function checkLoginStatus() {
  const token = localStorage.getItem('accessToken');
  isLoggedIn.value = !!token;
}

function logout() {
  localStorage.removeItem('accessToken');
  isLoggedIn.value = false;
  router.push('/login');
}

onMounted(checkLoginStatus);
</script>

<style scoped>
.site-header {
  background-color: transparent;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.brand {
  color: black;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  margin-right: auto;
}

.navigation {
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px; /* Adjust based on your design */
}

.nav-item {
  margin: 0 10px; /* Adjust spacing between nav items */
}

.nav-link {
  color: black;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.auth-button {
  background-color: #007bff; /* 밝은 녹색으로 배경 설정 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  padding: 10px 20px; /* 내부 여백 추가 */
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 모서리 둥글게 */
  cursor: pointer; /* 마우스 오버 시 커서 모양 변경 */
  transition: background-color 0.3s ease, color 0.3s ease; /* 색상 변경 시 부드러운 전환 효과 */
  font-size: 16px; /* 폰트 크기 조정 */
  font-weight: bold; /* 폰트 굵기 조정 */
  text-transform: uppercase; /* 텍스트를 대문자로 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  text-decoration: none; /* 링크 텍스트 밑줄 제거 */
  display: inline-block; /* 링크 정렬을 위해 추가 */
  margin-left: auto;
}

.auth-button:hover {
  background-color: white; /* 버튼 호버 시 색상 변경 */
  color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 강조 */
}


</style>
