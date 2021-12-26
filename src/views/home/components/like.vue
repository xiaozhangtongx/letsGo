<template>
  <a-like autoplay>
    <div id="a">
      <h3>当季推荐</h3>
    </div>
    <div class="b">
      <div class="b1">p1</div>
      <div class="b2">p2</div>
      <div class="b3">p3</div>

    </div>
  </a-like>
</template>

<script>
export default {};
</script>
<style scoped lang="less" scoped>
.a{
    height: 5vh;
    width: 80%;
}
.b{
    height: 25vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
}
.b1{
    height: 25vh;
    width: 30%;
    border: 1px solid rgb(0, 0, 0);
}
.b2{
    height: 25vh;
    width: 30%;
    border: 1px solid rgb(0, 0, 0);
}
.b3{
    height: 25vh;
    width: 30%;
    border: 1px solid rgb(0, 0, 0);
}
</style>
