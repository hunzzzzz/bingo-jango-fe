import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
