<template>
  <div id="vlog">
    <a-card style="width: 60vw" :hoverable="true">
      <slot name="title"></slot>
      <span>
        <strong>评分：</strong>
        <a-rate v-model="value" />&nbsp; {{value}}分
      </span>
      <div class="edit_container">
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      </div>
      <!-- 图片上传 -->
      <!-- <Photo /> -->
      <UploadPhoto />
      <div class="bt_btns">
        <a-button type="danger" icon="upload">
          发布
        </a-button>
        <a-button type="primary" icon="save">
          保存
        </a-button>
      </div>
    </a-card>
  </div>

</template>
<script>
import Photo from '@/components/Photo'
import UploadPhoto from '@/components/UploadPhoto'
import { quillEditor } from 'vue-quill-editor' //调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  data() {
    return {
      value: 3,
      content: '',
      // 编辑富文本框
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            ['blockquote', 'code-block'], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            // [{'direction': 'rtl'}],                         // 文本方向
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            [{ font: [] }], // 字体种类
            [{ align: [] }], // 对齐方式
            ['clean'], // 清除文本格式
            ['link'],
            // ['link', 'image', 'video'], // 链接、图片、视频
          ], //工具菜单栏配置
        },
        placeholder: '请输入文本...', //提示
        readyOnly: false, //是否只读
        theme: 'snow', //主题 snow/bubble
        syntax: true, //语法检测
      },
      // 上传图片
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    }
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(editor) {
      this.content = editor.html
      console.log(editor)
    }, // 内容改变事件
  },
  components: {
    Photo,
    quillEditor,
    UploadPhoto,
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
}
</script>

<style lang="less" scoped>
#vlog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .edit_container {
    width: 100%;
    min-height: 100px;
  }
  .bt_btns {
    display: flex;
    justify-content: space-evenly;
  }
}

/deep/.ql-editor {
  min-height: 200px;
}
</style>