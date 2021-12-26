<template>
  <div id="journey_create">
    <!-- 左侧行程信息 -->
    <li class="left">
      <h1>我的行程单</h1>
      <h2>{{date}}天</h2>
      <TravePoints v-for="item in 4" :key="item.index" />
    </li>
    <!-- 中间添加行程 -->
    <li class="center">
      <div class="time">
        <h2>
          <a-icon type="left-circle" /><strong>第1天</strong>
          <a-icon type="right-circle" />
        </h2>
        <h3>
          2021年12月26日 周日
        </h3>
      </div>
      <div class="trave_point">
        <Spot v-for="item in 2" :key="item.index" />
      </div>
    </li>
    <!-- 右边景点信息 -->
    <li class="right">
      <div class="rt_btn">
        <a-button icon="compass" type="primary" style="margin-right:10px">
          行程地图
        </a-button>
        <a-button type="danger">
          完成
        </a-button>
      </div>
      <div class="rm_span">
        <span><strong>当前城市</strong></span>
        <span><strong>我的收藏</strong></span>
      </div>
      <!-- 添加景点部分 -->
      <div>
        <div class="rt_btn">
          <a-button type="primary" style="margin-right:10px">
            综合推荐
          </a-button>
          <a-button type="danger" style="margin-right:10px">
            筛选
          </a-button>
          <a-input-search placeholder="请输入查找的内容" enter-button style="width:40%" />
        </div>
        <Spot v-for="item in 2" :key="item.index">>
          <a-button icon="plus" size="small" slot="add">
            添加至行程
          </a-button>
        </Spot>
      </div>
    </li>
  </div>
</template>

<script>
import TravePoints from '@/views/journey_create/components/TravePoints'
import Spot from '@/components/Spot'
export default {
  name: '',
  data() {
    return {
      date: 2,
    }
  },
  methods: {},
  components: {
    TravePoints,
    Spot,
  },
}
</script>

<style scoped lang='less'>
#journey_create {
  width: 100%;
  display: flex;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-right: 1px #eee solid;
  }
  .center {
    flex: 3;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .time {
      width: 60%;
      height: 16%;
      border-radius: 6px;
      border: #3164f0 solid 2px;
    }
    .trave_point {
      width: 90%;
      margin-top: 30px;
      border-top: #eee solid 2px;
    }
    h2,
    h3 {
      text-align: center;
    }
    .anticon {
      cursor: pointer;
      margin: 0px 30px;
    }
  }
  .right {
    flex: 2;
    > div {
      width: 98%;
      margin-bottom: 20px;
    }
    .rt_btn {
      display: flex;
      justify-content: flex-end;
    }
    .rm_span {
      display: inline-flex;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 40px;
        font-size: 18px;
        background-color: #fff;
        border: solid 1px #3164f0;
      }
    }
  }
}
</style>