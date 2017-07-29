<template>
  <div class="wrapper" @click="update">
      <div>
        <text>生产批次</text>
        <input></input>
      </div>
      <div>
        <text>产品类别</text>
        <input></input>
      </div>
      <div>
        <text>产品代别</text>
        <input></input>
      </div>
      <div>
        <button>发送</button>
        </div>      
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 220px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .scanner{width: 400px;height: 400px}
</style>

<script>
  var navigator = weex.requireModule('navigator')

  export default {
    mounted:function(){

    },
    data: {
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
