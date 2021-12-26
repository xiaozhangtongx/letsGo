<template>
  <div id="home">
    <div class="carousel">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from '@/views/home/components/Carousel'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    Carousel,
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
  height: 30vh;
  width: 80%;
  margin-top: 20px;
}
</style>