import { createRouter, createWebHistory } from 'vue-router'
import IntroduceMain from "@/views/introduce/IntroduceMain.vue";
import RefrigeratorMain from "@/views/refrigerator/RefrigeratorMain.vue";
import FoodMain from "@/views/food/FoodMain.vue";
import ChatMain from "@/views/chat/ChatMain.vue";
import VoteMain from "@/views/vote/VoteMain.vue";
import PurchaseMain from "@/views/purchase/PurchaseMain.vue";
import UserMain from "@/views/user/UserMain.vue";
import Login from "@/views/user/Login.vue";
import SignUp from "@/views/user/SignUp.vue";
import ForgetPassword from "@/views/user/ForgetPassword.vue";
import Home from "@/views/main/Home.vue";
import ForgetEmail from "@/views/user/ForgetEmail.vue";
import AddRefrigerator from "@/views/refrigerator/AddRefrigerator.vue";
import JoinRefrigeratorByPassword from "@/views/refrigerator/JoinRefrigeratorByPassword.vue";
import JoinRefrigeratorByInvitationCode from "@/views/refrigerator/JoinRefrigeratorByInvitationCode.vue";
import SendInvitationCode from "@/views/refrigerator/SendInvitationCode.vue";
import GetMyProfile from "@/views/user/GetMyProfile.vue";
import GetUser from "@/views/user/GetUser.vue";
import UpdateUserPassword from "@/views/user/UpdateUserPassword.vue";
import UpdateUserProfile from "@/views/user/UpdateUserProfile.vue";
import WithdrawUser from "@/views/user/WithdrawUser.vue";
import OauthRedirect from "@/views/user/OauthRedirect.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: IntroduceMain
  },
  {
    path: '/refrigerator',
    name: 'refrigerator',
    component: RefrigeratorMain
  },
  {
    path: '/refrigerator/add',
    name: 'add-refrigerator',
    component: AddRefrigerator
  },
  {
    path: '/refrigerator/{refrigeratorId}/invitation',
    name: 'send-invitation-code',
    component: SendInvitationCode
  },
  {
    path: '/refrigerator/join/password',
    name: 'join-password-refrigerator',
    component: JoinRefrigeratorByPassword
  },
  {
    path: '/refrigerator/join/code',
    name: 'join-code-refrigerator',
    component: JoinRefrigeratorByInvitationCode
  },
  {
    path: '/food',
    name: 'food',
    component: FoodMain
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatMain
  },
  {
    path: '/vote',
    name: 'vote',
    component: VoteMain
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: PurchaseMain
  },
  {
    path: '/user',
    name: 'user',
    component: UserMain
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: ForgetPassword
  },
  {
    path: '/forget-email',
    name: 'forget-email',
    component: ForgetEmail
  },
  {
    path: '/get-profile',
    name: 'get-profile',
    component: GetMyProfile
  },
  {
    path: '/get-user',
    name: 'get-user',
    component: GetUser
  },
  {
    path: '/update-user-password',
    name: 'update-user-password',
    component: UpdateUserPassword
  },
  {
    path: '/update-user-profile',
    name: 'update-user-profile',
    component: UpdateUserProfile
  },
  {
    path: '/withdraw-user',
    name: 'withdraw-user',
    component: WithdrawUser
  },
  {
    path: '/oauth-redirect',
    name: 'oauth-redirect',
    component: OauthRedirect
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 전역 네비게이션 가드 추가
router.beforeEach((to, from, next) => {
  // 'accessToken' 키를 사용하여 로컬 스토리지에서 토큰 가져오기
  const token = localStorage.getItem('accessToken')

  // 로그인이 필요한 페이지에 접근하려고 하고 토큰이 없을 경우
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    // 로그인 페이지로 리다이렉트
    next('/login')
  } else {
    // 그 외 경우에는 정상적으로 페이지 이동
    next()
  }
})

export default router
