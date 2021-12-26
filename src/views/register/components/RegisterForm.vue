<template>
  <div class="registerf">
    <a-form id="components-form-demo-normal-login" :form="form" class="register-form"
      @submit="handleSubmit">
      <!-- 输入用户名 -->
      <a-form-item>
        <a-input v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入你的用户名' }] },
        ]" placeholder="请输入用户名">
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <!-- 输入密码 -->
      <a-form-item>
        <a-input-password v-decorator="[
          'password',
          { rules: [{ required: true,len:6, message: '请输入六位密码!' }] },
        ]" type="password" placeholder="请输入密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input-password>
      </a-form-item>
      <!-- 确认密码 -->
      <a-form-item>
        <a-input-password v-decorator="[
          'cpassword',
          { rules: [{ required: true,len:6, message: '请确认你的密码!' }] },
        ]" type="password" placeholder="请确认密码">
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit"> 注册 </a-button>
      </a-form-item>
    </a-form>
  </div>

</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_register' })
  },
  data() {
    return {
      code: 0,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          if (values.password != values.cpassword) {
            return this.$message.error('两次输入的密码不一致！')
          } else {
            console.log(values)
            this.$router.push('/login')
          }
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.registerf {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  #components-form-demo-normal-login {
    width: 90%;
  }
}

.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/deep/ .ant-input,
.ant-btn {
  width: 300px;
  height: 40px;
}
</style>
