<template>
  <a-around autoplay>
    <div class="aa">
      <div class="aa1">
        <div>
          <h3>周边游</h3>
        </div>
        <div>
          <a-button :size="small">要搜索的城市</a-button>
        </div>
      </div>
      <div>
        更多
        <a-icon type="double-right" />
        <a-icon type="double-right" />
      </div>
    </div>
    <div class="bb">
      <div class="bb1">p1</div>
      <div class="bb2">p2</div>
      <div class="bb3">p3</div>
    </div>
  </a-around>
</template>

<script>
export default {}
</script>
<style scoped lang="less" scoped>
.aa {
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.aa1 {
  height: 5vh;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.bb {
  height: 25vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.bb1 {
  height: 25vh;
  width: 30%;
  border: 1px solid rgb(0, 0, 0);
}
.bb2 {
  height: 25vh;
  width: 30%;
  border: 1px solid rgb(0, 0, 0);
}
.bb3 {
  height: 25vh;
  width: 30%;
  border: 1px solid rgb(0, 0, 0);
}
</style>