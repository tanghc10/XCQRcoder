package com.xunce.xcqrcoder;

import android.Manifest;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.PermissionChecker;
import android.util.Log;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;

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
    protected void initView() {
        super.initView();
        mQRCodeView = new ZXingView(mContext,null);
        mQRCodeView.setResultHandler(this);
    }

    @Override
    public void onScanQRCodeSuccess(String result) {
        Log.d(TAG,result);
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
