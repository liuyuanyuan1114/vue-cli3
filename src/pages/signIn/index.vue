<template>
  <div class="sign-in-container">  
    <h1>登录</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名称">
        <el-input v-model="username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="password" @keyup.native.enter="signIn"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="signIn">登录</el-button>
        <router-link to="/signUp">没有账号?去注册!</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      let{username, password}=this
      //0. 点击登录按钮, 进行表单校验
      if(!username.trim() ||!password.trim()){
        return this.$message({
          showClose:true,
          message:"用户名或密码不能为空哦!",
          type:'error'
        })
      }
      // 1. 将用户输入的信息提交给服务器 vue-resource  axios
      // axios
      this.$http.post('/users/login',{
        username,
        password
      })
      .then(result =>{
        console.log(result,66);
        
        this.$message({
          type:'success',
          message:result.succMsg
        });
        localStorage.setItem("token",result.data.token);
        localStorage.setItem("userInfo",JSON.stringify(result.data));
        this.$router.push("/home")
      })
      
      

     
    }
  }
};
</script>

<style lang="less" >
.sign-in-container,
.sign-up-container {
  width: 600px;
  // border: 1px solid #ccc;
  margin: 200px auto;
  h1 {
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    color: #0094ff;
  }
  .buttom-container {
    .el-form-item__content {
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #0094ff;
      }
    }
  }
}
</style>
