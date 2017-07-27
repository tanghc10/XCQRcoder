package com.xiaoantech.helloworld;

import android.widget.ImageView;

import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

/**
 * Created by 73843 on 2017/7/26.
 */

public class ImageAdapter implements IWXImgLoaderAdapter {


    @Override
    public void setImage(String url, ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
        //实现你自己的图片下载。
    }
}