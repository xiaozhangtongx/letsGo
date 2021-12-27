<template>
  <div>
    <div class="show-info">
      <li>
        <div>
          <div>
            <a-avatar :size="100" :src="user.avatar" />
          </div>
        </div>
      </li>
      <li>用户名</li>
      <li>个性签名</li>
    </div>
    <div>
      <!-- 头部区 -->
      <div class="top">
        <!-- <img src="../assets/logo2.png" alt="" height="50px"/> -->
        <!-- <span>我是游记</span> -->
        <li>
          <router-link to="">行程</router-link>
        </li>
        <li>
          <router-link to="">游记</router-link>
        </li>
        <li>
          <router-link to="">收藏</router-link>
        </li>
        <li>
          <router-link to="">草稿</router-link>
        </li>
        <li>
          <router-link to="">个人信息</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      user: this.$store.state.user,
    }
  },
  methods: {},
}
</script>

<style scoped lang='less'>
.show-info {
  display: flex;
  justify-content: center;
  height: 20vh;
  line-height: 20vh;
  background: url('https://macjpeg.macsc.com/macw/pic/202009/03112832_657abfbe67.jpeg');
  > li {
    margin-right: 5vw;
    text-align: center;
  }
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 0;
  border-color: #fff;
  border: 0.5px solid #000;

  > li {
    flex-grow: 1;
    text-align: center;
    height: 8vh;
    line-height: 8vh;
    font-size: 20px;
  }
}
</style>
