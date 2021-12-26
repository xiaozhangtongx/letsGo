<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <!-- header部分 -->
    <a-layout-header class="header">
      <Header />
    </a-layout-header>
    <!-- content部分 -->
    <a-layout-content style="padding: 0 50px" class="content">
      <router-view></router-view>
    </a-layout-content>
    <!-- footer部分 -->
    <a-layout-footer style="text-align: center">
      走 马 ©2021 Created by 晓 游
    </a-layout-footer>
  </a-layout>
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
  }
  .content {
    > div {
      height: 100%;
      background-color: #fff;
      padding: '24px';
    }
  }
  .footer {
    height: 2vh;
  }
}
// 修改原有的格式
/deep/.ant-layout-header {
  height: 8vh;
  padding: 0 50px;
  background: #157aee;
}
/deep/.ant-layout-footer {
  padding: 10px 5px;
}
/deep/.ant-menu-dark {
  background: #157aee;
}
/deep/.ant-menu-item,
.ant-menu-submenu-title {
  height: 8vh;
  line-height: 8vh;
}
</style>
