<template>
  <div class="sign-up-page">
    <h1>회원가입</h1>
    <form @submit.prevent="signUp">
      <div>
        <label for="name">이름</label>
        <input v-model="user.name" type="text" id="name" required>
      </div>
      <div>
        <label for="nickname">닉네임</label>
        <input v-model="user.nickname" type="text" id="nickname" required>
      </div>
      <div>
        <label for="email">이메일</label>
        <input v-model="user.email" type="email" id="email" required>
      </div>
      <div>
        <label for="phone">전화번호</label>
        <input v-model="user.phone" type="text" id="phone" required>
      </div>
      <div>
        <label for="password">비밀번호</label>
        <input v-model="user.password" type="password" id="password" required>
      </div>
      <div>
        <label for="passwordConfirm">비밀번호 확인</label>
        <input v-model="user.passwordConfirm" type="password" id="passwordConfirm" required>
      </div>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        name: '',
        nickname: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: '',
      }
    }
  },
  methods: {
    signUp() {
      if (this.user.password !== this.user.passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      const userData = {
        name: this.user.name,
        nickname: this.user.nickname,
        email: this.user.email,
        phone: this.user.phone,
        password: this.user.password,
        passwordConfirm: this.user.passwordConfirm
      };

      axios.post('http://localhost:8080/api/v1/users/signup', userData)
          .then(response => {
            // 요청이 성공적으로 처리되면 실행됩니다.
            alert("회원가입이 완료되었습니다.");
            // 회원가입 성공 후 처리 로직, 예: 로그인 페이지로 리다이렉트
            this.$router.push('/');
          })
          .catch(error => {
            // 요청 처리 중 오류가 발생하면 실행됩니다.
            console.error("회원가입 오류:", error);
            alert("회원가입 중 문제가 발생했습니다. 다시 시도해 주세요.");
          });
    }
  }
}
</script>

