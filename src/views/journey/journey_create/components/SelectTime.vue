<template>
  <div>
    <a-button type="primary" icon="plus" @click="showModal">
      添加一天
    </a-button>
    <a-modal title="请选择你出行的日期" :visible="visible" @ok="handleOk" @cancel="handleCancel">
      <a-date-picker v-model="date" show-time type="date" placeholder="选择日期" />
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      date: undefined,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(this.date)
      this.visible = false
    },
    handleCancel(e) {
      this.visible = false
    },
  },
}
</script>
