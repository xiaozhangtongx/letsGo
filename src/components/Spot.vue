<template>
  <div id="spot">
    <a-card :hoverable="true">
      <div class="spot">
        <li class="img"><img src="../assets/logo.png" alt="" srcset=""></li>
        <li class="detail">
          <h3><strong>黄鹤楼</strong></h3>
          <h3><strong>地址：</strong>位于湖北省武汉市武昌区</h3>
          <h3><strong>评价:</strong>
            黄鹤楼是古典与现代熔铸、诗化与美意构筑的精品...</h3>
          <router-link to="">详细信息</router-link>
          <slot name="add"></slot>
        </li>
      </div>
    </a-card>
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
#spot {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  .spot {
    display: flex;
    align-items: center;
    width: 100%;
    li {
      flex: 1;
      width: 100%;
      height: 100%;
    }
    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 150px;
      }
    }
    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 3;
      margin-left: 10px;
    }
  }
}

/deep/.ant-card-body {
  padding: 0;
  zoom: 1;
}
/deep/.ant-card {
  margin-top: 10px;
}
</style>