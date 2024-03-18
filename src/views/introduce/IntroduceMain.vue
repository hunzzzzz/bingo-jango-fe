<template>
  <div class="main">
    <div class="box">
      <h1>빙고장고, 우리 함께 관리해요!</h1>
      <p>빙고장고는 구성원 간 공동으로 식품을 관리할 수 있는 냉장고 서비스입니다.</p>
      <ul>
        <li>✔️ 식품의 수량 관리</li>
        <li>✔️ 유통기한 관리</li>
        <li>✔️ 투표와 공동구매로 항상 풍족하게!!</li>
      </ul>
      <router-link to="/signup" button type="button">지금 가입하기</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'IntroduceMain'
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/main.jpg');
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.8);
}

.box {
  padding: 20px;
  background-color: rgba(255, 255, 255); /* 박스 배경색 조정 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  width: 40%; /* 박스 너비 조정 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

h1 {
  color: #34495e; /* 제목 색상 */
  margin-bottom: 15px;
}

p, li {
  color: #333; /* 본문 색상 */
  line-height: 1.6; /* 줄 간격 */
}

ul {
  list-style-type: none; /* 리스트에서 점 표시 제거 */
  padding: 0; /* 왼쪽 패딩 제거 */
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db; /* 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9; /* 버튼 호버 효과 */
}
</style>
