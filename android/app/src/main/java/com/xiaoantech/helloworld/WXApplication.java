package com.xiaoantech.helloworld;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

import com.xiaoantech.helloworld.compontent.XCScaner;
import com.xiaoantech.helloworld.module.PhoneInfoModule;
import com.xiaoantech.helloworld.compontent.RichText;
import com.xiaoantech.helloworld.module.myModule;

/**
 * Created by 73843 on 2017/7/26.
 */

public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
         WXSDKEngine.initialize(this, config);
        try {
            WXSDKEngine.registerModule("poneInfo", PhoneInfoModule.class);
            WXSDKEngine.registerModule("myModule", myModule.class);
            WXSDKEngine.registerComponent("richText", RichText.class, false);
            WXSDKEngine.registerComponent("xcScaner", XCScaner.class,false);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
