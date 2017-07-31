<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <el-input id="user" v-model="login.user" placeholder="请输入账号">
          <template slot="prepend">账号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6">
        <el-input id="psd" v-model="login.psd" type="password" placeholder="请输入密码">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3">
        <el-button id="resign" v-on:click="resign" style="width: 80%" type="primary">注册</el-button>
      </el-col>
      <el-col :span="3">
        <el-button id="entry" v-on:click="logIn" style="width: 80%" type="primary">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  body {
    background-color: #ffffff;
  }

  .el-row {
    margin-bottom: 20px;
  }
</style>
<script>
  export default {
    name: 'login',
    components: {},
    data () {
      return {
        login: {
          user: '',
          psd: ''
        }
      }
    },
    methods: {
      resign: function (event) {
        if (this.login.user === '' || this.login.psd === '') {
          this.$message({
            message: '账号不能为空',
            type: 'error'
          })
          return
        }
        const postData = [this.login.user, this.login.psd]
        this.axios.post('/user/resign', postData)
          .then(response => {
            var result = response.data.result
            if (result === 'true' || result === true) {
              alert('注册成功')
            } else {
              alert('注册失败,用户名重复')
            }
          })
      },
      logIn: function (event) {
        if (this.login.user === '' || this.login.psd === '') {
          this.$message({
            message: '账号不能为空',
            type: 'error'
          })
          return
        }
        const postData = {
          user: this.login.user,
          psd: this.login.psd
        }
        this.axios.post('/user/login', postData)
          .then(response => {
            console.log(response)
            var result = response.data.result
            if (result) {
              alert('登录成功')
            } else {
              alert('登录失败')
            }
          })
      }
    }
  }
</script>
