<template>
  <div class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">BingoJango</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/introduce" class="nav-link" href="#">소개</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/refrigerator" class="nav-link" href="#">냉장고</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/food" class="nav-link" href="#">음식</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chat" class="nav-link" href="#">채팅방</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vote" class="nav-link" href="#">투표</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/purchase" class="nav-link" href="#">같이구매</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="nav-link" href="#">마이페이지</router-link>
          </li>
        </ul>
        <button class="btn btn-outline-primary" type="button"><router-link to="/login">로그인</router-link></button>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script setup>
</script>
