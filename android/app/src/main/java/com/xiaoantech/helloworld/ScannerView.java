package com.xiaoantech.helloworld;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.PermissionChecker;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;

import java.util.HashMap;
import java.util.Map;

import cn.bingoogolapple.qrcode.core.QRCodeView;
import cn.bingoogolapple.qrcode.zxing.ZXingView;


/**
 * Created by yangxu on 2017/7/27.
 */

public class ScannerView extends WXComponent implements QRCodeView.Delegate{
    private ZXingView mQRCodeView;
    private String  TAG = "Scanner";
    public ScannerView(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);

    }

    @Override
    protected View initComponentHostView(@NonNull Context context) {
        mQRCodeView = new ZXingView(getContext(),null);
        mQRCodeView.setResultHandler(this);
        mQRCodeView.startCamera();
        mQRCodeView.startSpot();
        return mQRCodeView;
    }
    //    protected void initComponentHostView(Context context) {
//        super.initComponentHostView(context);
//        mQRCodeView = new ZXingView(getContext(),null);
//        mQRCodeView.setResultHandler(this);
//    }

    @Override
    public void onScanQRCodeSuccess(String result) {
        Log.d(TAG,result);
        Map<String,Object> params=new HashMap<>();
        params.put("key","value");
        WXSDKInstance mWXSDKInstance = new WXSDKInstance(getContext());
        mWXSDKInstance.fireGlobalEventCallback("geolocation",params);

    }

    public void startReading(){
        mQRCodeView.startCamera();
        mQRCodeView.startSpot();
    }

    public void stopReading(){
        mQRCodeView.stopSpot();
        mQRCodeView.stopCamera();
    }

    @Override
    public void onScanQRCodeOpenCameraError() {
        Log.d(TAG,"scan open");
    }



}
