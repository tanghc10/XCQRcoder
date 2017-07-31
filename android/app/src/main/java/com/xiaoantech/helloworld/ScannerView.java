package com.xiaoantech.helloworld;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.support.annotation.NonNull;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.PermissionChecker;
import android.util.AttributeSet;
import android.util.Log;
import android.util.Xml;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AnimationUtils;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

import java.io.IOException;
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
        XmlPullParser parser = context.getResources().getXml(R.xml.scan_view_attr);
        // Seek to the first tag.
        int type = 0;
        while (type != XmlPullParser.END_DOCUMENT && type != XmlPullParser.START_TAG) {
            try {
                type = parser.next();
            } catch (XmlPullParserException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        AttributeSet attributes = Xml.asAttributeSet(parser);
        mQRCodeView = new ZXingView(getContext(),attributes);
        mQRCodeView.setResultHandler(this);
        mQRCodeView.startCamera();
        mQRCodeView.startSpot();
        return mQRCodeView;
    }

    @Override
    public void onScanQRCodeSuccess(String result) {
        Log.d(TAG,result);
        Map<String,Object> params=new HashMap<>();
        params.put("result",result);
        getInstance().fireGlobalEventCallback("scannerEvent",params);

        startReading();

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
        Log.d(TAG,"scan open error");
    }

}
