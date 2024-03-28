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
      <div>
      <button v-if="isLoggedIn" @click="logout" type="button" class="btn btn-danger" style="margin-left: auto">로그아웃</button>
      <router-link v-else to="/login" type="button" class="btn btn-danger">로그인</router-link>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<script setup>
import {ref, onMounted, watchEffect, onUnmounted} from 'vue';
import { useRouter } from 'vue-router';

// 로그인 상태를 나타내는 반응형 참조 변수
const isLoggedIn = ref(false);
const router = useRouter();

// 로그인 상태를 체크하는 함수
function checkLoginStatus() {
  const token = localStorage.getItem('accessToken');
  isLoggedIn.value = !!token; // 토큰의 존재 여부에 따라 true 또는 false 할당
  console.log(token)
}

// 로그아웃 함수
function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  isLoggedIn.value = false; // 로그인 상태 업데이트
  router.push('/login'); // 로그인 페이지로 리다이렉션
}

// 컴포넌트가 마운트되었을 때 로그인 상태 체크
onMounted(() => {
  checkLoginStatus()
  window.addEventListener("storage", checkLoginStatus)
})
onUnmounted(() =>{
  window.removeEventListener("storage", checkLoginStatus)
})

// 로컬 스토리지의 변경을 감시하고 로그인 상태 업데이트
// 사용자가 다른 탭에서 로그인/로그아웃할 경우에도 UI가 적절히 반응하도록 함
watchEffect(() => {
  window.addEventListener('storage', checkLoginStatus);
  // 이벤트 리스너 제거를 위한 클린업 함수
  return () => {
    window.removeEventListener('storage', checkLoginStatus);
  };
});
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
  justify-content: space-between; /* 기존의 설정을 유지하면서 */
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.brand {
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  margin-right: auto; /* 수정된 부분: 로고를 제외한 나머지 요소들로부터 좌측으로 밀어냄 */
}

.navigation {
  display: flex;
  justify-content: center; /* 네비게이션 리스트를 중앙으로 정렬 */
  flex-grow: 2; /* 네비게이션 리스트가 중앙에 위치하도록 조정 */
}

.nav-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 auto 0 auto; /* 마진을 조정하여 네비게이션 리스트를 가운데 정렬 */
}

.nav-item {
  margin: 0 10px; /* 기존 설정 유지 */
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s; /* 기존 설정 유지 */
}

.btn-danger {
  margin-left: auto; /* 버튼을 우측으로 밀기 위해 */
}


</style>
