<template>
  <div id="journey_look">
    <li>
      <h2>{{travelPlan.name}}</h2>
    </li>
    <li>{{travelPlan.startDate}}---->{{travelPlan.endDate}}</li>
    <li>{{travelPlan.pointLine}}</li>
    <li class="top">
      <h2 class="tr_btn">
        <a-button type="primary" icon="upload" style="margin-right:10px" @click="goNote">
          发表游记
        </a-button>
        <a-button type="danger" icon="edit" style="margin-right:10px" @click="editJourney">
          编辑行程
        </a-button>
        <a-button icon="compass" type="primary" style="margin-right: 10px" @click="goMap">
          行程地图
        </a-button>
      </h2>
    </li>
    <li class="mid">
      <a-steps v-model="current" type="navigation" size="small" :style="stepStyle">
        <a-step :title="item.dateTime" status="process" v-for="(item,index) in days" :key="index"
          @click="getIndex(item,index)" />
      </a-steps>
    </li>
    <li class="bottom">
      <div class="spot" v-for="item in tran[tindex]" :key="item.index">
        <Spot :spot="item" />
        <a-button type="danger" v-show="travelPlan.vlogName!=null">查看游记</a-button>
      </div>
      <div></div>
    </li>
    <a-modal title="行程地图" :visible="visible" footer='' :width="1024" @cancel="handleCancel">
      <Map class="map" />
    </a-modal>

  </div>
</template>

<script>
import Spot from '@/components/Spot'
import { getByPlanId } from '@/api/travel_plan.js'
import { sort } from '@/utils/sort.js'
import Map from '@/map/Map'
export default {
  name: '',
  data() {
    return {
      visible: false,
      current: 0,
      stepStyle: {
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
      plans: this.$route.query,
      tran: [],
      days: [],
      tindex: 0,
      travelPlan: {},
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
      spot: [],
    }
  },
  methods: {
    // 获取信息
    getByPlanId() {
      getByPlanId({ id: this.$route.query.id }).then(({ data: res }) => {
        console.log(res)
        this.spot = res.result.list
        this.travelPlan = res.result
        this.tran = sort(this.spot).tran
        this.days = sort(this.spot).days
      })
    },
    // 获取index
    getIndex(item, index) {
      this.tindex = index
    },
    // 编辑行程
    editJourney() {
      this.$router.push({
        path: '/journey/create',
        query: { id: this.travelPlan.id },
      })
    },
    // 发表游记
    goNote() {
      this.$router.push('/travel_notes')
    },
    goMap() {
      this.visible = true
    },
    // 取消展示
    handleCancel() {
      this.visible = false
    },
  },
  components: {
    Spot,
    Map,
  },
  created() {
    this.getByPlanId()
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
    display: flex;
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
  .bottom {
    display: flex;
    flex-direction: column;
    .spot {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40vw;
    }
  }
}
/dee/.ant-modal.bodyStyle {
  width: 80vw;
}
</style>