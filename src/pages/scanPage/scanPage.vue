<template>
  <!--<div class="wrapper" @click="update">-->
    <!--<image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>-->
    <wxscanner id='wxScanner' class="scanner" ref="scanner"></wxscanner>
  <!--</div>-->
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .scanner{width: 400px;height: 400px}
</style>

<script>
  var navigator = weex.requireModule('navigator')

  export default {
    mounted:function(){
      // let that = this.$root;
      // console.log('el',this.$refs.scanner);
      // this.$refs.scanner.focus();
      // this.$refs.scanner.startReading();
      navigator.push({
          url: './scanner.js',
          animated: "true"
        }, event => {
          console.log({ message: 'callback: ' + event })
        })
    },
    data: {
      logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
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
