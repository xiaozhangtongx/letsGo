<template>
  <div id="journey_create">
    <!---------------------------- 左侧行程信息 ---------------------------->
    <li class="left">
      <h1>我的行程单</h1>
      <h2>{{days.length}}天</h2>
      <!-- 添加一天按钮 -->
      <div>
        <a-button type="primary" icon="plus" @click="showModal">
          添加一天
        </a-button>
        <a-modal title="请选择你出行的日期" :visible="visible" @ok="handleOk" @cancel="handleCancel">
          <a-date-picker v-model="day.time" show-time type="day.time" placeholder="选择日期" />
        </a-modal>
      </div>
      <div class="travelPoints">
        <div v-for="item in days" :key="item.index" style="width:80%">
          <TravePoints />
        </div>
      </div>
    </li>
    <!---------------------------- 中间添加的景点信息 ---------------------------->
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
      <article class="trave_point">
        <Spot v-for="item in spot" :key="item.index" :spot="item" />
      </article>
    </li>
    <!---------------------------- 右侧景点信息 ---------------------------->
    <li class="right">
      <div class="rt_btn">
        <a-button icon="compass" type="primary" style="margin-right:10px">
          行程地图
        </a-button>
        <a-button type="danger" @click="createFinish">
          完成
        </a-button>
      </div>
      <div class="rm_span">
        <a-card style="width:100%" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey"
          @tabChange="key => onTabChange(key, 'noTitleKey')">
          <section v-if="noTitleKey === '选择城市'">
            <!-- 添加景点部分 -->
            <div class="rm_btn">
              <a-row type="flex" justify="space-around" align="middle">
                <a-input-search placeholder="请输入查找的内容" enter-button style="width:50%" />
                <a-button type="primary">
                  综合推荐
                </a-button>
              </a-row>
              <a-row type="flex" align="middle" justify="space-around">
                <vue-area-cascader style="width:49%;margin-top:5px" v-model="citySelect">
                </vue-area-cascader>
                <a-button type="danger">
                  查询
                </a-button>
              </a-row>
            </div>
            <!--  添加城市部分 -->
            <article class="city">
              <Spot v-for="item in spot" :key="item.index" :spot="item">>
                <a-button icon="plus" size="small" slot="add">
                  添加至行程
                </a-button>
              </Spot>
              <a-button type="link" class="more" @click="addMore"><strong>
                  <a-icon type="sync" spin />更多
                </strong></a-button>
            </article>
          </section>
          <section v-else>
            <Spot v-for="item in spot" :key="item.index">>
              <a-button icon="plus" size="small" slot="add">
                添加至行程
              </a-button>
            </Spot>
          </section>
        </a-card>
      </div>
    </li>
  </div>
</template>

<!--------------------------------------------------- js --------------------------------------------------->
<script>
import { list } from '@/api/attraction.js'
import { travelPointslist } from '@/api/travel_point.js'
// import SelectTime from '@/views/journey/journey_create/components/SelectTime'
import TravePoints from '@/views/journey/journey_create/components/TravePoints'
import Spot from '@/components/Spot'
import VueAreaCascader from '@/components/VueAreaCascader'
export default {
  name: '',
  data() {
    return {
      // 景点数据
      spot: [],
      // 用户景点信息
      // 选择日期信息
      visible: false,
      date: new Date(),
      // travelPoints
      day: {
        place: '',
        time: undefined,
      },
      // 日期数
      days: [],
      // 用户节点信息
      UserSpot: [],
      citySelect: [],
      search: {
        pageNo: 1,
        pageSize: 2,
      },
      travelplanParams: {
        pageNo: 1,
        pageSize: 2,
      },
      tabListNoTitle: [
        {
          key: '选择城市',
          tab: '选择城市',
        },
        {
          key: '我的收藏',
          tab: '我的收藏',
        },
      ],
      key: 'tab1',
      noTitleKey: '选择城市',
    }
  },
  methods: {
    // 获取景点信息
    getSpotInfo() {
      list(this.search)
        .then(({ data: res }) => {
          // console.log(res.result)
          this.spot.push(...res.result)
          // console.log(this.spot)
        })
        .catch((err) => {})
    },
    // 选择日期
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.days.push(this.date)
      this.days.sort((a, b) => {
        //降序
        // return a.time < b.time ? 1 : -1
        //升序
        return a > b ? 1 : -1
      })
      console.log(this.days)
      // console.log(this.date)
      this.visible = false
    },
    handleCancel(e) {
      this.visible = false
    },
    // 获取用户行程信息
    /*gettravelPoints() {
      travelPointslist(this.search)
        .then(({ data: res }) => {
          let arr = res.result
          console.log(arr)
          // let map = {}
          // let myArr = []
          // for (let i = 0; i < arr.length; i++) {
          //   if (!map[arr[i].travelPlanId]) {
          //     myArr.push({
          //       travelPlanId: arr[i].travelPlanId,
          //       data: [arr[i]],
          //     })
          //     map[arr[i].travelPlanId] = arr[i]
          //   } else {
          //     for (let j = 0; j < myArr.length; j++) {
          //       if (arr[i].travelPlanId === myArr[j].travelPlanId) {
          //         myArr[j].data.push(arr[i])
          //         break
          //       }
          //     }
          //   }
          // }
          // console.log(myArr)
        })
        .catch((err) => {
          console.log(err)
        })
    },*/
    // 行程创建完成
    createFinish() {
      this.$router.push('/journey/look')
    },
    // 切换页面
    onTabChange(key, type) {
      console.log(key, type)
      this[type] = key
    },
    // 添加更多
    addMore() {
      this.search.pageNo += this.search.pageSize
      this.getSpotInfo()
    },
  },
  // 组件部分
  components: {
    TravePoints,
    Spot,
    VueAreaCascader,
    // SelectTime,
  },
  created() {
    // 获取景点信息
    this.getSpotInfo()
    // 获取用户行程信息
    // this.gettravelPoints()
  },
}
</script>


<!--------------------------------------------------- css --------------------------------------------------->
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
  .left {
    .travelPoints {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 60vh;
      overflow-y: auto;
    }
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
      height: 56vh;
      width: 90%;
      overflow-y: auto;
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
    .rm_btn {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .rm_span {
      display: inline-flex;
      height: 60vh;
      .city {
        height: 40vh;
        margin-top: 5px;
        overflow-y: auto;
      }
    }
  }
}
</style>