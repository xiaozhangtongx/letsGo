<template>
  <div class="show-info">
    <li>
      <div>
        <a-avatar :size="100" :src="user.avatar" />
      </div>
    </li>
    <slot name="detail"></slot>
    <slot name="label"></slot>
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
  align-items: center;
  height: 15vh;
  background: url('https://macjpeg.macsc.com/macw/pic/202009/03112832_657abfbe67.jpeg');
  > li {
    margin-right: 5vw;
    text-align: center;
  }
}
</style>