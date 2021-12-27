<template>
  <div id="journey_look">
    <li class="top">
      <h2>北京2日游</h2>
      <h2 class="tr_btn">
        <a-button type="primary" style="margin-right:10px" @click="goNote">
          发表游记
        </a-button>
        <a-button type="danger" @click="editJourney">
          编辑行程
        </a-button>
      </h2>
    </li>
    <li class="mid">
      <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
        <a-step :title="item.title" status="process" :description="item.description"
          v-for="item in step" :key="item.index" />
      </a-steps>
    </li>
    <li class="bottom">
      <div class="spot">
        <Spot v-for="item in spot" :key="item.index" :spot="item" />
      </div>
      <div></div>
    </li>

  </div>
</template>

<script>
import Spot from '@/components/Spot'
export default {
  name: '',
  data() {
    return {
      current: 0,
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
      step: [
        {
          title: '北京',
          description: '北京->武汉',
        },
        {
          title: '北京',
          description: '北京->武汉',
        },
        {
          title: '北京',
          description: '北京->武汉',
        },
      ],
      // 景点测试数据
      spot: [
        {
          name: 1,
          dis: '456132',
        },
        {
          name: 1,
          dis: '456132',
        },
        {
          name: 1,
          dis: '456132',
        },
      ],
    }
  },
  methods: {
    // 编辑行程
    editJourney() {
      this.$router.push('/journey/create')
    },
    // 发表游记
    goNote() {
      this.$router.push('/travel_notes')
    },
  },
  components: {
    Spot,
  },
}
</script>

<style scoped lang='less'>
#journey_look {
  display: flex;
  flex-direction: column;
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
  .top {
    h2 {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
    }
    .tr_btn {
      flex: 1;
    }
  }
  .spot {
    width: 40vw;
  }
}
</style>