<template>
  <div id="layout">
    <header>
      <Header></Header>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
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

<style scoped lang='less'>
#layout {
  height: 100vh;
  width: 100vw;
  header {
    height: 8vh;
  }
  section {
    min-height: 88vh;
    padding: 2vw 2vw;
    background-color: #eee;
    > div {
      border-radius: 10px;
      background-color: #fff;
    }
  }
  footer {
    height: 4vh;
    line-height: 4vh;
    color: #fff;
    text-align: center;
    background-color: #157aee;
  }
}
</style>