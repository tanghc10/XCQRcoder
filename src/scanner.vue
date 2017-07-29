<template>
  <div class="wrapper" @click="update">
    <div class="scanner-container">
      <text class="counter">{{totalIMEI==0?'--':totalIMEI}}</text>
      <wxscanner class="scanner" ref="scanner"></wxscanner>
    </div>
  <div>
    <text>生产批次</text>
    <input class="input" type="text" placeholder="Input Text" @change="pbchange"></input>
  </div>
  <div>
    <text>产品类别</text>
    <input class="input" type="text" placeholder="Input Text" @change="ptchange"></input>
  </div>
  <div>
    <text>产品代别</text>
    <input class="input" type="text" placeholder="Input Text" @change="pgchange"></input>
  </div>
    <button @click="send()">跳转</button>
  </div>
</template>

<style>
  .wrapper { align-items: center;  }
  .scanner-container {align-items: center;margin-top: 100px}
  .title { font-size: 48px; }
  .counter{font-size: 48px}
  .logo { width: 360px; height: 82px; }
  .scanner{width: 500px;height: 500px;margin: 50px}
  .button{width: 200px;height: 80px;font-size: 40px;margin-top: 100px}
  .input{width: 400px;height: 40px}
</style>

<script>
    var navigator = weex.requireModule('navigator')
    const globalEvent = weex.requireModule('globalEvent');
    const storage = weex.requireModule('storage')
  export default {

    created(){
      let that = this;
      globalEvent.addEventListener('scannnerEvent', function(e){
          that.getScannerString(e);
      });
      storage.getItem('IMEIList',event=>{
          let IMEIList = event.data;
          console.log('--data--'+IMEIList);
          if(IMEIList){
            IMEIList = that.getArrayWithString(IMEIList);
            that.totalIMEI = IMEIList.length;
          }
      });
    },
    data: {
      target: 'World',
      totalIMEI:0,
      pbValue:0,
      ptValue:0,
      pgValue:0
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      jump(){
        let scanPageURL = this.getBaseUrl(weex.config.bundleUrl)+'/'+'sendPage.weex.js';
        console.log('------weex config url',weex.config.bundleUrl);
        console.log('------scan url',scanPageURL);
        navigator.push({
          url: scanPageURL,
          animated: "true"
        }, event => {
          console.log({ message: 'callback: ' + event })
        })
      },
      getBaseUrl(url){
        let urlArray = url.split('/');
        let newArray =  urlArray.slice(0,urlArray.length-1);
        return newArray.join('/');
      },
      getScannerString(result){
        console.log(result);
        let string = result.result;
        let newIMEI;
        if(string.IMEI){
          newIMEI = string.IMEI;
        }else{
          let strArray = string.split(';');
          console.log('array'+strArray);
          console.log(strArray.length)
          if(strArray.length>2){
              console.log('--------- ');
            let IMEIString = strArray[2];
            console.log('------'+IMEIString)
            if(IMEIString.indexOf('IMEI')>=0){
              console.log('string'+IMEIString);
              newIMEI = IMEIString.split(':')[1];
            }
          }
        }
        console.log(newIMEI);
        this.dealWithIMEI(newIMEI);
      },
       getStringWithArray(array) {
         console.log('----getStr----',array)
        let str='';
        for(var i=0;i<array.length;i++){
          console.log('----IMEI----',array[i]);
          str = str + array[i] + '\n';
        }
        console.log('----result----',str);
        return str;
    },getArrayWithString(string) {
      let array = string.split('\n');
      return array.slice(0, array.length - 1);
    },
    dealWithIMEI(IMEI){
        storage.getItem('IMEIList',event=>{
          let IMEIList = event.data;
          console.log('--data--'+IMEIList);
          if(IMEIList){
            IMEIList = this.getArrayWithString(IMEIList);
            console.log('storaged data -- -- --',IMEIList);
            for(var i=0;i<IMEIList.length;i++){
              if(IMEIList[i]==IMEI){
                return
              }
            }
            this.totalIMEI ++;
            IMEIList.push(IMEI);
            IMEIList = this.getStringWithArray(IMEIList)
            storage.setItem('IMEIList',IMEIList);
          }else{
            IMEIList = new Array(IMEI);
            console.log('---imeilist',IMEIList)
            IMEIList = this.getStringWithArray(IMEIList)
            storage.setItem('IMEIList',IMEIList,event => {
              console.log('set success',event.data);
           });
          }
          console.log('----storge----'+event.data);
        })
      },
      pbchange(event){
        this.pbValue = event.value;
      },
      ptchange(event){
        this.ptValue = event.value;
      },
      pgchange(event){
        this.pgValue = event.value;
      },
      send(){
        console.log(this.pbValue,this.ptValue,this.pgValue);
      }
    }
  }
</script>
