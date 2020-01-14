<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="avator_box">
        <img src="../assets/logo.png" alt />
      </div>
      <el-form :model="loginForm" :rules="loginFormrules" label-width="0px" class="login_form" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-place" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        _this_:this
      },
      loginFormrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 10, message: '长度在8到10个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      const _this_=this;
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return;
        this.$store.commit('getUserData',this.loginForm)
      })
    },
  }
}
</script>
<style lang="less" scoped>
.login_bg {
  background: #2b4b6b;
  height: 100%;
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); //IE10以上支持。
    // margin-left:-225px;
    // margin-top:-150px;
    .avator_box {
      width: 130px;
      height: 130px;
      // background:url(../assets/logo.png) no-repeat;
      // background-size:100%;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      background: #fff;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
    .login_form{
        position: absolute;
        bottom:0;
        width:100%;
        box-sizing:border-box;
        padding:0 20px;
        .btns{
            display:flex;
            justify-content:flex-end;
        }
    }
  }
}
</style>
