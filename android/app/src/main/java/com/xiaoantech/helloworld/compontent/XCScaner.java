package com.xiaoantech.helloworld.compontent;

import android.content.Context;
import android.graphics.Camera;
import android.hardware.camera2.CameraManager;
import android.text.SpannableString;
import android.text.method.LinkMovementMethod;
import android.text.style.URLSpan;
import android.widget.TextView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.ui.view.WXFrameLayout;

/**
 * Created by 73843 on 2017/7/27.
 */

public class XCScaner extends WXComponent {

    private Camera camera;

    public XCScaner(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy){
        super(instance, dom, parent, isLazy);
    }

    @Override
    protected void initView() {
        super.initView();
    }


}
