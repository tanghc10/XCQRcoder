package com.xiaoantech.helloworld.module;

import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
 * Created by 73843 on 2017/7/27.
 */


public class myModule extends WXModule {

    @JSMethod
    public void printLog(String msg){
        Toast.makeText(mWXSDKInstance.getContext(), msg, Toast.LENGTH_SHORT).show();
    }
}
