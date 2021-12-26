<template>
  <div id="home">
    <div class="carousel">
      <Carousel />
    </div>
    <div class="like">
      <like />
    </div>
    <div class="around">
      <around />
    </div>
    <div class="vlog">
      <vlog />
    </div>
  </div>
</template>

<script>
import Carousel from '@/views/home/components/Carousel'
import like from '@/views/home/components/like'
import around from '@/views/home/components/around'
import vlog from '@/views/home/components/vlog'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Carousel,
    like,
    around,
    vlog,
  },
}
</script>

<style scoped lang='less'>
#home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  // height: 30vh;
  width: 80%;
  margin-top: 20px;
}
.like {
  // height: 30vh;
  width: 80%;
  margin-top: 20px;
}
.around {
  // height: 30vh;
  width: 80%;
  margin-top: 20px;
}
.vlog {
  // height: 30vh;
  width: 80%;
  margin-top: 20px;
}
</style>