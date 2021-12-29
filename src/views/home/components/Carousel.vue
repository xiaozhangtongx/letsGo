<template>
  <a-carousel autoplay>
    <div v-for="item in imgs" :key="item.id">
      <img :src="item.img" alt="暂无图片">
    </div>
  </a-carousel>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        {
          id: 1,
          img: 'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/4c224e22da3af919c8c111bbe92a2ebf.jpg',
        },
        {
          id: 2,
          img: 'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/8ee5e4eaefbc1b680c2c63e229534407.jpg',
        },
        {
          id: 3,
          img: 'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/19d93d8828c5281c995cce558620e08d.jpg',
        },
        {
          id: 4,
          img: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/f00a50fba728de7c9347228b8c876adc.jpg_r_720x400x95_46534dba.jpg',
        },
        {
          id: 5,
          img: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/f3e36fc872ad46785af6cb59e8bd5428.jpg_r_720x400x95_19f65bf1.jpg',
        },
      ],
    }
  },
}
</script>
<style scoped >
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 37vh;
  line-height: 37vh;
  width: 70vw;
  background: #364d79;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
img {
  /* width: 70vw; */
  width: 100%;
  /* height: 20vh; */
  object-fit: cover;
}
</style>
