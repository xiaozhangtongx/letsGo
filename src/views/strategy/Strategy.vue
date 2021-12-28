<template>
  <div>
    <div>
      <a-input-search placeholder="输入关键词搜索" v-model="keyWord" style="width: 200px"
        @search="onSearch" />
    </div>
    <div>
      <div v-for="item in selectSource" :key="item.index">
        <span style="font-size:20px;font-weight: bolder;margin-right: 30px;">{{item.name}}:</span>
        <a-radio-group :name="item.name" v-model="item.value">
          <a-radio v-for="item2 in item.list" :value="item2.key" :key="item2.index">
            {{item2.value}}
          </a-radio>
        </a-radio-group>
      </div>

      <div>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="景点">
            Content of 景点
          </a-tab-pane>
          <a-tab-pane key="2" tab="游记" force-render>
            Content of 游记
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { getAction, postAction, putAction } from '@/api/travel_plan'

export default {
  name: '',
  data() {
    return {
      keyWord: '',
      //选项
      selectSource: [
        {
          value: 'null',
          name: '季节',
          list: [
            {
              key: 'null',
              value: '全部',
            },
            {
              key: '春季',
              value: '春季',
            },
            {
              key: '夏季',
              value: '夏季',
            },
            {
              key: '秋季',
              value: '秋季',
            },
            {
              key: '冬季',
              value: '冬季',
            },
          ],
        },
        {
          value: 'null',
          name: '人物',
          list: [
            {
              key: 'null',
              value: '全部',
            },
            {
              key: '独自一人',
              value: '独自一人',
            },
            {
              key: '三五好友',
              value: '三五好友',
            },
            {
              key: '家庭',
              value: '家庭',
            },
            {
              key: '情侣',
              value: '情侣',
            },
          ],
        },
        {
          value: 'null',
          name: '玩法',
          list: [
            {
              key: 'null',
              value: '全部',
            },
            {
              key: '穷游',
              value: '穷游',
            },
            {
              key: '自驾',
              value: '自驾',
            },
            {
              key: '毕业游',
              value: '毕业游',
            },
            {
              key: '美食',
              value: '美食',
            },
            {
              key: '滑雪',
              value: '滑雪',
            },
            {
              key: '购物',
              value: '购物',
            },
            {
              key: '古镇',
              value: '古镇',
            },
            {
              key: '游轮',
              value: '游轮',
            },
            {
              key: '人文',
              value: '人文',
            },
            {
              key: '红色',
              value: '红色',
            },
          ],
        },
      ],
      tagList: '',
      url: {
        vlog: '/vlog/unAuth/searchList',
        attraction: '/attraction/unAuth/searchList',
      },
      dataSource: {
        vlogList: [],
        attractionList: [],
      },
    }
  },
  methods: {
    onSearch() {
      this.tagList = []
      this.selectSource.forEach((item) => {
        this.tagList.push(item.value)
      })
      this.tagList = this.tagList.join(';')
      getAction(this.url.vlog, { keyWord: this.keyWord, tags: this.tagList }).then((res) => {
        this.dataSource.vlogList = res.data.result
        console.log('vlog', res)
      })
      getAction(this.url.attraction, { keyWord: this.keyWord, tags: this.tagList }).then((res) => {
        this.dataSource.attractionList = res.data.result
        console.log('attraction', res)
      })
    },
  },
  created() {},
}
</script>

<style scoped lang='less'>
</style>
