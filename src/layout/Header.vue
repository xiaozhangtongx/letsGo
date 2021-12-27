<template>
  <div class="headers">
    <!-- logo部分 -->
    <div class="logo">走 马</div>
    <!-- 导航栏部分 -->
    <div class="nav">
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/strategy">攻略</router-link>
      </li>
      <a-input-search placeholder="请输入搜索的内容" style="width: 20%" />
      <li>
        <router-link to="/journey">行程</router-link>
      </li>
      <li>
        <router-link to="/travel_notes">游记</router-link>
      </li>
    </div>
    <!-- 登录注册部分 -->
    <div class="login">
      <li>
        <router-link to="/register">注册</router-link>|
        <router-link to="/login">登录</router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang='less'>
.headers {
  display: flex;
  height: 100%;
  width: 100%;
  background: #157aee;
  a {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
  > div {
    display: flex;
  }
  .logo,
  .login {
    flex: 1;
  }
  .nav {
    flex: 5;
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    a,
    li {
      color: #fff;
      font-size: 16px;
    }
  }
}

.logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  li {
    // width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
  }
}
</style>