<template>
  <div id="travepoints">
    <a-tooltip>
      <template slot="title">
        插入一天
      </template>
      <a-button type="primary" size="small" icon="plus" />
    </a-tooltip>
    <li class="points">
      <span class="points_left">
        <span class="daynum">D1</span>
      </span>
      <span class="points_right">
        <h3>{{date}}</h3>
        <h3>{{place}}</h3>
      </span>
    </li>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      date: '2021年12月11日',
      place: '北京-->武汉',
    }
  },
  methods: {},
}
</script>

<style scoped lang='less'>
#travepoints {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  li {
    display: inline-flex;
    align-items: center;
    height: 80px;
    width: 95%;
    margin: 10px 0;
    background-color: #b6d6fa;
    border-radius: 10px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .points_left {
      flex: 1;
      .daynum {
        width: 50px;
        height: 50px;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        border-radius: 10px;
        background-color: #157aee;
      }
    }
    .points_right {
      flex: 2;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>