<template>
  <div>
    <a-form :form="form">
      <a-form-item label="名称" style="margin-bottom: 0;">
        <a-input v-decorator="['name', {rules: [{required: true, message: '请输入名称！'}]}]" />
      </a-form-item>
      <a-form-item>
        <a-upload :multiple="true" :fileList="downloadFiles" :remove="handleDownloadFileRemove"
          :customRequest="downloadFilesCustomRequest" :headers="headers">
          <a-button class="upload-btn">
            <a-icon type="upload" /> 上传附件
          </a-button>
        </a-upload>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { upload } from '@/api/file.js'
export default {
  name: 'demoForm',
  data() {
    return {
      headers: {},
      form: this.$form.createForm(this), // 表单数据初始化
      downloadFiles: [], // 已经上传的文件列表
    }
  },
  methods: {
    // 重写a-upload的文件上传处理方式
    downloadFilesCustomRequest(data) {
      this.saveFile(data)
    },
    // 上传并保存文件
    saveFile(data) {
      const formData = new FormData()
      formData.append('file', data.file)
      formData.append('TempleteFile', data.file.name)
      upload(formData).then((res) => {
        // 发送http请求
        if (res.code === 0) {
          let file = this.fileFormatter(res.data)
          // 上传单个文件后，将该文件会先到a-upload组件的已上传文件列表中的操作
          this.downloadFiles.push(file)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    // 对上传成功返回的数据进行格式化处理，格式化a-upload能显示在已上传列表中的格式（这个格式官方文档有给出的）
    fileFormatter(data) {
      let file = {
        uid: data.uuid, // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
        name: data.name, // 文件名
        status: 'done', // 状态有：uploading done error removed
        response: '{"status": "success"}', // 服务端响应内容
      }
      return file
    },
    // 删除
    handleDownloadFileRemove(file) {
      const index = this.downloadFiles.indexOf(file)
      const newFileList = this.downloadFiles.slice()
      newFileList.splice(index, 1)
      this.downloadFiles = newFileList
    },
  },
}
</script>

<style scoped lang='less'>
</style>
