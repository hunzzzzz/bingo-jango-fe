<template>
  <div class="main">
    <div class="box">
      <h2 class="form-title">냉장고 조회</h2>
      <p v-for="(item, index) in refrigerators" :key="index">냉장고: {{ item.name }}</p>
      <p v-if="refrigerators.length === 0">소속된 냉장고가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetRefrigerator',
  data() {
    return {
      refrigerators: []
    };
  },
  mounted() {
    this.getRefrigerator();
  },
  methods: {
    async getRefrigerator() {
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.get('http://localhost:8080/refrigerator', {
          headers: {'Authorization': `Bearer ${token}`}
        });
        this.refrigerators = response.data;
      } catch (error) {
        console.error("냉장고 정보를 가져오는데 실패했습니다.", error);
      }
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
  margin-top: 30px;
}
button:hover {
  background-color: #45a049;
}

</style>