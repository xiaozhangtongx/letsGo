<template>
  <div id="spot">
    <a-card :hoverable="true">
      <div class="spot">
        <li class="img"><img src="../assets/logo.png" alt="" srcset=""></li>
        <li class="detail">
          <h3><strong>{{spot.name}}</strong></h3>
          <h3><strong>地址：</strong>{{spot.location}}</h3>
          <h3><strong>描述:</strong>
            {{spot.name}}...</h3>
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
  props: {
    spot: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
  filters: {
    // strSlice(str) {
    //   return str.slice(10) + '......'
    // },
  },
}
</script>

<style scoped lang='less'>
#spot {
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  // overflow: hidden;
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
  margin: 10px;
  border-radius: 10px;
}
/deep/.ant-card-bordered {
  border: 2px solid rgb(241, 239, 239);
}
</style>