<template>
  <a-form id="components-form-demo-normal-login" :form="form" class="login-form"
    @submit="handleSubmit">
    <a-form-item>
      <a-input v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入你的用户名' }] },
        ]" placeholder="用户名">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input-password v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入你的六位密码!',
              },
            ],
          },
        ]" type="password" placeholder="密码">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input-password>
    </a-form-item>
    <a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 登录 </a-button>
      </a-form-item>
      <a-button type="link" class="register" @click="gotoRegister">
        注册账号
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    // 用户登录
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        // console.log(values.userId.length)
         login(values).then( res => {
           console.log(res);
           if(res.data.success){

           }
         })
        if (!err) {
          // this.$router.replace('/home') // 页面跳转
        }
      })
    },
    // 用户注册
    gotoRegister() {
      this.$router.push('/register')
    },
  },
}
</script>

<style lang="less" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/deep/ .ant-input,
.ant-btn {
  width: 300px;
  height: 50px;
}

// /deep/.ant-form-item-control {
//   margin-top: 6px;
//   margin-bottom: 4px;
// }
.register {
  float: left;
  height: 20px;
  width: 90px;
}
</style>
