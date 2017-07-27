<template>
    <div>
        <div class="total-container">
            <text>已扫描设备数:{{total==0?'--':total}}</text>
        </div>
        <div class="scanner-container">
            <div class="scanner">
                <text>
                </text>
            </div>
        </div>
        <div>
            <div class="button-container">
                <button class="button" @click="clearIMEIList">清除数据</button>
            </div>
            <div class="button-container">
                <button class="button" @click="gotoSendData">上传设备列表</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data:{
      total:0
  },
  methods:{
      clearIMEIList(){

      },
      gotoSendData(){
      }
  }
  
}
</script>

<style scoped>
    .total-container{
        width: 750px;
        height: 200px;
        padding: 10px 20px;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end
    }
    .scanner-container{
        width: 750px;
        height: 600px;
        flex-direction: row;
        background-color: green;
        align-items: center;
        justify-content: center;
    }
    .scanner{
        width: 400px;
        height: 400px;
        background-color: red
    }
    .button-container{
        height: 150px;
        width: 750px;
        justify-content: center;
        align-items: center
    }
    .button{
        font-size: 35px;
        background-color: lightgrey;
        padding: 10px 10px;
        border-radius:10px
    }
</style>
