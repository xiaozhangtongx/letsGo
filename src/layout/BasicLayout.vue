<template>
  <div class="layout">
    <header class="header">
      <Header />
    </header>
    <div style="padding: 0 50px" class="content">
      <router-view></router-view>
    </div>
    <footer class="footer">
      走 马 ©2021 Created by 晓 游
    </footer>
  </div>
</template>

<script>
import Header from '@/layout/Header'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Header,
  },
}
</script>


<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  .header {
    height: 8vh;
    width: 100vw;
    padding: 0 50px;
    background: #157aee;
  }
  .content {
    // height: 90vh;
    min-height: 90vh;
    background-color: #eee;
    > div {
      background-color: #fff;
      padding: '24px';
    }
  }
  .footer {
    height: 2vh;
    text-align: center;
  }
}
</style>
