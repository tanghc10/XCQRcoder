package com.xunce.xcqrcoder;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by yangxu on 2017/7/27.
 */

public class WXApplication extends Application{
    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config=new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);
        try {
            WXSDKEngine.registerComponent("wxscanner",ScannerView.class);
        }catch (WXException e){
            e.printStackTrace();
        }
    }
}
