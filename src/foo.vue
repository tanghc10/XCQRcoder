<template>
  <div class="wrapper" @click="update">
    <!--<image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>-->
    <!--<div class="wrapper">-->
    <wxscanner class="scanner" ref="scanner"></wxscanner>
    <button @click="jump()">跳转</button>
    </div>
  <!--</div>-->
</template>

<style>
  .wrapper { align-items: center; margin-top: 200px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .scanner{width: 400px;height: 400px}
</style>

<script>
  // var navigator = weex.requireModule('navigator')
    var globalEvent = weex.requireModule('globalEvent');
    globalEvent.addEventListener("geolocation", function (e) {
      console.log("get geolocation",e)
    });
  export default {


    mounted:function(){
      let that = this.$root;
      console.log('el',this.$refs.scanner);
      // this.$refs.scanner.focus();
      // console.log('weex config',weex.config)
      // navigator.push({
      //     url: '',
      //     animated: "true"
      //   }, event => {
      //     console.log({ message: 'callback: ' + event })
      //   })
    },
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      jump(){
          this.$refs.scanner.startReading();
        // let scanPageURL = this.getBaseUrl(weex.config.bundleUrl)+'/'+'scanPage.weex.js';
        // console.log('------weex config url',weex.config.bundleUrl);
        // console.log('------scan url',scanPageURL);
        // navigator.push({
        //   url: scanPageURL,
        //   animated: "true"
        // }, event => {
        //   console.log({ message: 'callback: ' + event })
        // })
      },
      getBaseUrl(url){
        let urlArray = url.split('/');
        let newArray =  urlArray.slice(0,urlArray.length-1);
        return newArray.join('/');
      }
    }
  }
</script>
