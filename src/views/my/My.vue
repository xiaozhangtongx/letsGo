<template>
  <div>
    <div class="show-info">
      <li>
        <div>
          <div>
            <a-avatar :size="100"
              src="https://www.acgtubao.com/wp-content/uploads/2020/08/57857552_p0-726x1024.jpg" />
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
    return {}
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
  background: url('http://5b0988e595225.cdn.sohucs.com/images/20190704/7fb8a00405384ca4acce0c97b01c3277.jpeg');
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

    > a {
    }
    &:hover {
      cursor: pointer;
      color: #157aee;
      background-color: red;
    }
  }
}
</style>
