<template>
  <div id="note">
    <ImageBg>
      <a-input slot="detail" placeholder="请给你的游记取个名吧" style="width:30vw"></a-input>
    </ImageBg>
    <Vlog />
  </div>
</template>

<script>
import ImageBg from '@/components/ImageBg'
import Vlog from '@/components/Vlog'
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  components: {
    ImageBg,
    Vlog,
  },
}
</script>

<style scoped lang='less'>
</style>