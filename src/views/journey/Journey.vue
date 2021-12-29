<template>
  <div>
    {{plan}}
    <router-view />
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      plan: this.$store.data,
    }
  },
  methods: {},
}
</script>

<style scoped lang='less'>
</style>