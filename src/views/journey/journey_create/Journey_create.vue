<template>
  <div id="journey_create">
    <!---------------------------- 左侧行程信息 ---------------------------->
    <li class="left">
      <h1>我的行程单</h1>
      <h2>{{ days.length }}天</h2>
      <!-- 添加一天按钮 -->
      <div>
        <a-button type="primary" icon="plus" @click="showModal">
          添加一天
        </a-button>
        <a-modal title="请选择你出行的日期" :visible="visible" @ok="handleOk" @cancel="handleCancel">
          <a-date-picker @change="onChange" placeholder="选择日期" />
        </a-modal>
      </div>
      <div class="travelPoints">
        <div v-for="(item, index) in days" :key="index" style="width: 80%">
          <TravePoints :point="item" :indexs="index" />
        </div>
      </div>
    </li>
    <!---------------------------- 中间添加的景点信息 ---------------------------->
    <li class="center" v-show="isShow">
      <div class="time" v-if="days.length != 0">
        <h2>
          <a-icon type="left-circle" @click="sub" /><strong>第{{ id + 1 }}天</strong>
          <a-icon type="right-circle" @click="add" />
        </h2>
        <h3>
          <strong>{{ days[id].dateTime }}</strong>
        </h3>
      </div>
      <article class="trave_point">
        <Spot v-for="(item, index) in tran[id]" :key="index" :spot="item" :index="index">
          <a-button icon="delete" size="small" slot="add" @click="deletePoints(item)">
            删除
          </a-button>
        </Spot>
      </article>
    </li>
    <!---------------------------- 右侧景点信息 ---------------------------->
    <li class="right" v-show="isShow">
      <div class="rt_btn">
        <a-modal :visible="isfinish" okText="确认" title="请输入行程名" cancel-text="取消"
          @cancel="handleCancel" @ok="handleFinsh">
          <!--表单 并将表单的值绑定到this.from-->
          <a-form layout="vertical" :form="form">
            <!--每一项元素-->
            <a-form-item>
              <a-input v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: '请填填写名称!' }],
                  },
                ]" />
            </a-form-item>
          </a-form>
        </a-modal>
        <!-- <a-modal title="请输入行程名" :visible="isfinish" @ok="handleFinsh" @cancel="handleCancel"
          ok-text="确认" cancel-text="取消">
          {{test1}}
          <a-input ref="test" v-model="test1"></a-input>
        </a-modal> -->
        <a-button type="danger" @click="createFinish"> 完成 </a-button>
      </div>
      <div class="rm_span">
        <a-card style="width: 100%" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey"
          @tabChange="(key) => onTabChange(key, 'noTitleKey')">
          <section v-if="noTitleKey === '选择城市'">
            <!-- 添加景点部分 -->
            <div class="rm_btn">
              <a-row type="flex" justify="space-around" align="middle">
                <a-input-search placeholder="请输入查找的内容" enter-button style="width: 50%" />
                <a-button type="primary"> 综合推荐 </a-button>
              </a-row>
              <a-row type="flex" align="middle" justify="space-around">
                <vue-area-cascader style="width: 49%; margin-top: 5px" v-model="citySelect">
                </vue-area-cascader>
                <a-button type="danger"> 查询 </a-button>
              </a-row>
            </div>
            <!--  添加城市部分 -->
            <article class="city">
              <Spot v-for="item in spot" :key="item.index" :spot="item">>
                <a-button icon="plus" size="small" slot="add" @click="addPoints(item)">
                  添加至行程
                </a-button>
              </Spot>
              <a-button type="link" class="more" @click="addMore"><strong>
                  <a-icon type="sync" spin />更多
                </strong></a-button>
            </article>
          </section>
          <section v-else>
            <article class="city">
              <Spot v-for="item in spot" :key="item.index" :spot="item">>
                <a-button icon="plus" size="small" slot="add" @click="addPoints(item)">
                  添加至行程
                </a-button>
              </Spot>
              <a-button type="link" class="more" @click="addMore"><strong>
                  <a-icon type="sync" spin />更多
                </strong></a-button>
            </article>
          </section>
        </a-card>
      </div>
    </li>
  </div>
</template>

<!--------------------------------------------------- js --------------------------------------------------->
<script>
import { list } from '@/api/attraction.js'
import { postAction, travelPlanlist, travelPlansave } from '@/api/travel_plan.js'
import { addPoint, deletes } from '@/api/travel_point.js'
// import SelectTime from '@/views/journey/journey_create/components/SelectTime'
import TravePoints from '@/components/TravePoints'
import Spot from '@/components/Spot'
import VueAreaCascader from '@/components/VueAreaCascader'
export default {
  name: '',
  data() {
    return {
      test1: '',
      // 要传递的数据
      modal: {
        addtravepoint: {
          attractionId: '',
          dateTime: new Date(),
        },
        addPlan() {
          plans: {
          }
        },
      },
      travelPlanId: this.$route.query.id,
      // 要传递的数据
      tran: [],
      id: 0,
      // 景点数据
      spot: [],
      // 选择日期信息
      visible: false,
      // 展示是否弹出最后提交的对话框
      isfinish: false,
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
      url: {
        planAdd: 'travel-plan/auth/add',
      },
    }
  },
  methods: {
    // 选择日期
    onChange(data, dataString) {
      console.log(dataString)
      this.day.time = dataString
    },
    // 获取景点信息
    getSpotInfo() {
      list(this.search)
        .then(({ data: res }) => {
          console.log(res.result)
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
      if (this.travelPlanId === '') {
        postAction(this.url.planAdd, {}).then((res) => {
          this.travelPlanId = res.data.result
          console.log('res', res)
          console.log('planid', this.travelPlanId)
        })
      }
      this.days.push(this.day.time)
      this.days.sort((a, b) => {
        return a > b ? 1 : -1
      })
      this.visible = false
    },
    handleCancel(e) {
      this.visible = false
      this.isfinish = false
    },
    add() {
      if (this.id < this.tran.length) {
        this.id++
      } else {
        return this.$message.error(
          '别点了，这已经是你行程的最后一天了，如果还没有玩够，赶快去添加行程吧'
        )
      }
    },
    sub() {
      if (this.id > 0) {
        this.id--
      } else {
        return this.$message.error('别点了，这已经是你行程的第一天了')
      }
    },
    // 获取用户行程信息
    gettravelPoints() {
      travelPlanlist({ id: this.travelPlanId })
        .then(({ data: res }) => {
          let arr = res.result.list
          this.modal.addPlan.plans = res.result
          console.log(arr)
          let map = {}
          let myArr = []
          for (let i = 0; i < arr.length; i++) {
            if (!map[arr[i].dateTime]) {
              myArr.push({
                dateTime: arr[i].dateTime,
                data: [arr[i].attraction],
              })
              map[arr[i].dateTime] = arr[i]
            } else {
              for (let j = 0; j < myArr.length; j++) {
                if (arr[i].dateTime === myArr[j].dateTime) {
                  myArr[j].data.push(arr[i].attraction)
                  break
                }
              }
            }
          }
          this.days = myArr
          myArr.sort((a, b) => {
            return a.dateTime > b.dateTime ? 1 : -1
          })
          console.log(myArr)
          myArr.forEach((item) => {
            this.tran.push(item.data)
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 行程创建完成
    createFinish() {
      this.isfinish = true
    },
    // 提交行程
    handleFinsh() {
      const form = this.form
      form.validateFields((err, values) => {
        if (err) {
          return 1
        }
        console.log('form 表单内容: ', values)
        form.resetFields()
        this.isfinish = false
        console.log(this.modal.addPlan.plans)
        this.modal.addPlan.plans.name = values.name
        // this.$router.push('/journey/look')
        travelPlansave(this.modal.addPlan.plans).then(({ data: res }) => {
          console.log(res)
          if (res.success == true) {
            this.$router.push({
              path: '/journey/look',
              query: this.modal.addPlan.plans,
            })
            this.$message.success(res.message)
          } else {
            this.$message.error(res.message)
          }
        })
      })
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
    // 添加节点
    addPoints(data) {
      this.tran = []
      this.modal.addtravepoint.attractionId = data.id
      console.log('行程id', this.travelPlanId)
      let a = {
        attractionId: data.id,
        dateTime: this.day.time,
        travelPlanId: this.travelPlanId,
      }
      console.log('新增节点', a)
      addPoint(a)
        .then((res) => {
          console.log(res)
          this.travelPlanId = res.data.result
          console.log('addPoint', this.travelPlanId)
          this.gettravelPoints()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 删除节点
    deletePoints(data) {
      deletes({ id: data.id }).then((res) => {
        console.log('dele', res)
        this.gettravelPoints()
      })
    },
  },
  // 组件部分
  components: {
    TravePoints,
    Spot,
    VueAreaCascader,
    // SelectTime,
  },
  beforeCreate() {
    //创建表单
    this.form = this.$form.createForm(this, { name: 'form_in_modal' })
  },
  created() {
    // 获取景点信息
    this.getSpotInfo()
    // 获取用户某日行程信息
    if (this.travelPlanId !== undefined) {
      this.gettravelPoints()
    }
    console.log('days', this.days)
  },
  computed: {
    // 是否展示
    isShow() {
      if (this.days.length == 0) {
        return true
      } else {
        return true
      }
    },
  },
}
</script>

<!--------------------------------------------------- css --------------------------------------------------->
<style scoped lang="less">
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
