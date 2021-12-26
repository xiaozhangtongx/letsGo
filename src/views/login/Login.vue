<template>
  <div class="user">
    <div class="Carousel">
      <Carousel />
    </div>
    <li class="title"><strong>收集地图上每一道的风和日丽
      </strong></li>
    <div class="loginform">
      <h1>用 户 登 录</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import LoginForm from '@/views/login/components/LoginForm'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Carousel,
    LoginForm,
  },
}
</script>

<style scoped lang='less'>
.user {
  width: 100vw;
  height: 100vh;
  .Carousel {
    width: 100%;
    height: 100%;
  }
}
.title {
  position: absolute;
  top: 46%;
  left: 40%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: #130a64;
  // font-family: '楷体';
}
.loginform {
  position: fixed;
  top: 20vh;
  right: 6vw;
  display: block;
  transition: all 0.1s;
  width: 50vh;
  height: 50vh;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // box-shadow: 5px 5px 5px #c9c9c9;
  h1 {
    text-align: center;
    // font-family: '楷体';s
    font-weight: 600;
  }
}
</style>