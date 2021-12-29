<template>
  <div id="home">
    <!-- <img src="../../assets/image.png" alt="" srcset=""> -->
    <div class="carousel">
      <Carousel />
    </div>
    <a-divider><strong>当季推荐</strong></a-divider>
    <div class="suggest">
      <a-card hoverable style="width: 280px" v-for="item in suggest" :key="item.index">
        <img slot="cover" alt="example" :src="item.url" />
        <template slot="actions" class="ant-card-actions">
          <a-icon key="setting" type="like" />
          <a-icon key="edit" type="star" />
          <a-icon key="ellipsis" type="more" />
        </template>
        <a-card-meta :title="item.name" :description="item.des">
        </a-card-meta>
      </a-card>
    </div>
    <li style="width:90%">
      <a-button type="link" style="float:right">
        <router-link to="/strategy"> 更多>>></router-link>
      </a-button>
    </li>
    <a-divider><strong>周边游</strong></a-divider>
    <div class="around">
      <a-card hoverable style="width: 280px" v-for="item in around" :key="item.index">
        <img slot="cover" alt="example" :src="item.url" />
        <template slot="actions" class="ant-card-actions">
          <a-icon key="setting" type="like" />
          <a-icon key="edit" type="star" />
          <a-icon key="ellipsis" type="more" />
        </template>
        <a-card-meta :title="item.name" :description="item.des">
        </a-card-meta>
      </a-card>
    </div>
    <li style="width:90%">
      <a-button type="link" style="float:right">
        <router-link to="/strategy"> 更多>>></router-link>
      </a-button>
    </li>
    <a-divider><strong>游记攻略</strong></a-divider>
    <div class="strategy">
      <a-card style="width:50vw;height:20vh; margin:20px 0" hoverable v-for="item in comment"
        :key="item.index">
        <Comment :comment="item" />
      </a-card>
    </div>
    <li style="width:90%">
      <a-button type="link" style="float:right">
        <router-link to="/strategy"> 更多>>></router-link>
      </a-button>
    </li>
  </div>
</template>

<script>
import Carousel from '@/views/home/components/Carousel'
import Comment from '@/views/home2/components/Comment'
import Spot from '@/components/Spot'
export default {
  name: '',
  data() {
    return {
      suggest: [
        {
          id: 1,
          url: 'https://dimg03.c-ctrip.com/images/100u0x000000lg8pfA158_D_769_510_Q100.jpg',
          name: '北京',
          des: '唯美紫禁城，乐园天花板-环球影城，百年传承·中轴文化，串各类胡同小巷，体验地道老北京传统',
        },
        {
          id: 1,
          url: 'https://dimg04.c-ctrip.com/images/0302q120008orx0x82BCF_D_769_510_Q100.jpg',
          name: '桂林',
          des: '5A船游漓江+大美龙脊&民族服饰体验网红木质吊桥&玻璃桥如意峰+银子岩+遇龙河',
        },
        {
          id: 1,
          url: 'https://dimg04.c-ctrip.com/images/0301x120008gjok4o6FEC_D_769_510_Q100.jpg',
          name: '三亚',
          des: '三亚5日4晚跟团游·『惊喜贺岁』限量1单1团！帆船出海+直升机/亚特水族馆/后海村',
        },
        {
          id: 1,
          url: 'https://dimg04.c-ctrip.com/images/0306d120008qy26ng7DB6_D_769_510_Q100.jpg',
          name: '重庆',
          des: '】武隆玩两天|九黎城·苗族部落图腾揭秘『巴渝峡江+坡坎码头·市井江湖·跨江索道』',
        },
      ],
      around: [
        {
          id: 1,
          url: 'https://dimg03.c-ctrip.com/images/fd/tg/g4/M0B/20/95/CggYHFYkxSmATfW_ABa6QZdcWhI797_D_769_510_Q100.jpg',
          name: '武汉长江大桥',
          des: '唯美紫禁城，乐园天花板-环球影城，百年传承·中轴文化，串各类胡同小巷，体验地道老北京传统',
        },
        {
          id: 1,
          url: 'https://dimg03.c-ctrip.com/images/fd/tg/g3/M00/5E/D0/CggYG1YzOguAfGDOABlU_t-IqWo555_D_769_510_Q100.jpg',
          name: '黄鹤楼',
          des: '5A船游漓江+大美龙脊&民族服饰体验网红木质吊桥&玻璃桥如意峰+银子岩+遇龙河',
        },
        {
          id: 1,
          url: 'https://dimg03.c-ctrip.com/images/fd/tg/g4/M07/4F/11/CggYHFYmF_GAeagxAB9RZ3AmjHo456_D_769_510_Q100.jpg',
          name: '武汉大学',
          des: '三亚5日4晚跟团游·『惊喜贺岁』限量1单1团！帆船出海+直升机/亚特水族馆/后海村',
        },
        {
          id: 1,
          url: 'https://dimg03.c-ctrip.com/images/fd/tg/g2/M04/90/55/CghzgVWmH1WAWjQGADSJXFGa_t4433_D_769_510_Q100.jpg',
          name: '昙华林',
          des: '】武隆玩两天|九黎城·苗族部落图腾揭秘『巴渝峡江+坡坎码头·市井江湖·跨江索道』',
        },
      ],
      comment: [
        {
          avatar: 'http://scimg.jianbihuadq.com/202009/202009162308095.jpg',
          name: '张三',
          content: '好好看呀，好美',
        },
        {
          avatar: 'http://scimg.jianbihuadq.com/touxiang/202004/202004012005566.jpg',
          name: '小美',
          content: '好好看呀，好美',
        },
        {
          avatar: 'http://img.crcz.com/allimg/202003/11/1583924109139642.jpg',
          name: '小王',
          content: '好好看呀，好美',
        },
      ],
    }
  },
  methods: {},
  components: {
    Carousel,
    Comment,
    Spot,
  },
}
</script>

<style scoped lang='less'>
#home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .fonts {
    font-size: 60px;
  }
  .carousel {
    width: 90%;
    margin-top: 20px;
  }
  .suggest,
  .around {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
}
</style>