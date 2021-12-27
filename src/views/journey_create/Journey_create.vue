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
      <article class="trave_point">
        <Spot v-for="item in spot" :key="item.index" :spot="item" />
      </article>
    </li>
    <!-- 右边景点信息 -->
    <li class="right">
      <div class="rt_btn">
        <a-button icon="compass" type="primary" style="margin-right:10px">
          行程地图
        </a-button>
        <a-button type="danger" @click="createFinish">
          完成
        </a-button>
      </div>
      <!-- 景点信息 -->
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

<script>
import { list } from '@/api/attraction.js'
import TravePoints from '@/views/journey_create/components/TravePoints'
import Spot from '@/components/Spot'
import VueAreaCascader from '@/components/VueAreaCascader'
export default {
  name: '',
  data() {
    return {
      date: 2,
      // 景点数据
      spot: [],
      citySelect: [],
      search: {
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
          console.log(res.result)
          this.spot.push(...res.result)
          console.log(this.spot)
        })
        .catch((err) => {})
    },
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
  components: {
    TravePoints,
    Spot,
    VueAreaCascader,
  },
  created() {
    // 获取景点信息
    this.getSpotInfo()
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