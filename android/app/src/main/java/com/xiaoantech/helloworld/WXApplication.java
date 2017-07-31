package com.xiaoantech.helloworld;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXException;



/**
 * Created by 73843 on 2017/7/26.
 */

public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config=new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);
        try {
            WXSDKEngine.registerComponent("wxscanner", ScannerView.class,true);
            WXSDKEngine.registerModule("http", HttpPostModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
