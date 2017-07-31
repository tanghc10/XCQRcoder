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
    <button @click="send()" class="button">发送</button>
    <button @click="clear()" class="button">清除数据</button>
  </div>
</template>

<style>
  .wrapper { align-items: center;  }
  .scanner-container {align-items: center;margin-top: 100px}
  .title { font-size: 48px; }
  .counter{font-size: 48px}
  .logo { width: 360px; height: 82px; }
  .scanner{width: 500px;height: 500px;margin: 50px}
  .button{width: 200px;height: 50px;font-size: 100px;margin-top: 20px;text-align: center;background-color: green}
  .input{width: 400px;height: 40px;background-color: gray}
</style>

<script>
    var navigator = weex.requireModule('navigator')
    const globalEvent = weex.requireModule('globalEvent');
    const storage = weex.requireModule('storage')
    const http = weex.requireModule('http')
    const modal = weex.requireModule('modal')
  export default {

    created(){
      let that = this;
      globalEvent.addEventListener('scannerEvent', function(e){
          console.log(e);
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
        if(typeof(newIMEI)!="undefined")
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
          console.log(typeof(IMEIList));
          if(typeof(IMEIList)!="undefined"){
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
                          this.totalIMEI ++;
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
        let that = this;
        storage.getItem('IMEIList',event=>{
          let IMEIList = event.data;
          console.log('--data--'+IMEIList);
          if(IMEIList){
            IMEIList = this.getArrayWithString(IMEIList);
            let sendParam = '{"imeiList":['+IMEIList+'],';
            console.log("sendParam1:  "+sendParam);
            sendParam = sendParam + '"pb":"' + that.pbValue + '","pt":"' + that.ptValue + '","pg":"' + that.pgValue + '"}';
            console.log("sendParam2:  "+sendParam);
            let param = '{"url":"https://test.xiaoan110.com/scm/procedure/imei2Sn","sendParam":' + sendParam + '}';
            console.log("param:  "+param);
            // let param = new Map();
            // let sendParam = new Map();
            // sendParam.imeiList = IMEIList;
            // sendParam.pb = that.pbValue;
            // sendParam.pt = that.ptValue;
            // sendParam.pg = that.pgValue;
            // param.url = 'https://test.xiaoan110.com/scm/procedure/imei2Sn';
            // param.sendParam = sendParam;
            http.postwithDic(param,function(res){
              console.log("response:"+res);
              let obj = JSON.parse(res);
              let result =  obj.suc;
              console.log("result:"+result);
              modal.alert({message:result?'上传成功':'上传失败'})
            })
          }
        });

      },
      clear(){
        let that = this;
        modal.confirm({
          message:'确认清除所有扫码设备？',
          okTitle:'确认',
          cancelTitle:'取消'
        },function(e){
          if(e=='确认'){
            storage.removeItem("IMEIList",function(e){
              if(typeof(e.data)=="undefined"){
                that.totalIMEI = 0;
              }
            })
          }
        })
      }
    }
  }
</script>
