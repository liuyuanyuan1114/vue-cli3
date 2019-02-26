<template>
  <div class="allReceiver-container">
    <!-- <el-table :data="receiverData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市" width="120"></el-table-column>
          <el-table-column prop="area" label="区/县" width="120"></el-table-column>
          <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
          <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table> -->


    <el-table :data="receiverData" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市" width="120"></el-table-column>
          <el-table-column prop="area" label="区/县" width="120"></el-table-column>
          <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
          <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
   data(){
       return {
           receiverData:[]
       }
   },
   created(){
       this.getAllReceiver()
   },
   methods:{
       getAllReceiver(){
        //获取token
         let token=localStorage.getItem("token") ||'';
        this.$http.get("/users/getReceiverAddress")
        .then(result=>{
            console.log(result,888);
            
            this.receiverData=result.data
        })
       }
   }

}
</script>
<style lang="less" scoped>
.allReceiver-container {
  padding: 50px;
}
