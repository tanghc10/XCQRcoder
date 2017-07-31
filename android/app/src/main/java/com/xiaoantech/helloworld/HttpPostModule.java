package com.xiaoantech.helloworld;

import android.util.Log;
import android.widget.Toast;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;
import com.taobao.weex.utils.WXLogUtils;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by 73843 on 2017/7/29.
 */

public class HttpPostModule extends WXModule{

    @WXModuleAnno(runOnUIThread = true)
    public void postwithDic(String param,final JSCallback callback){
        Toast.makeText(mWXSDKInstance.getContext(), "正在上传", Toast.LENGTH_SHORT).show();
        try{
            JSONObject paramObject = new JSONObject(param);
            final String url = paramObject.getString("url");
            final JSONObject params = paramObject.getJSONObject("sendParam");
            new Thread(new Runnable() {
                @Override
                public void run() {
                    byte[] bytes = params.toString().getBytes();
                    HttpURLConnection connection;
                    try{
                        URL postURL = new URL(url);
                        connection = (HttpURLConnection) postURL.openConnection();
                        connection.setConnectTimeout(5000);
                        connection.setRequestMethod("POST");
                        connection.setDoInput(true);
                        connection.setDoOutput(true);
                        connection.setUseCaches(false);
                        connection.setRequestProperty("Content-Type","application/json");
                        connection.setRequestProperty("Content-Length",String.valueOf(bytes.length));
                        OutputStream outputStream = connection.getOutputStream();
                        outputStream.write(bytes);
                        outputStream.flush();
                        outputStream.close();
                        int response = connection.getResponseCode();
                        if (response == HttpURLConnection.HTTP_OK){
                            String result = StreamToStringUtil.StreamToString(connection.getInputStream());
                            Log.e("http", result);
                            callback.invokeAndKeepAlive(result);
                        }
                    }catch (Exception e){
                        e.printStackTrace();
                    }
                }
            }).start();
        }catch (JSONException e){
            e.printStackTrace();
        }
    }



    public void postHttpCmdResult(final String url, final String body){
        new Thread(new Runnable() {
            @Override
            public void run() {
                byte[] bytes = body.getBytes();
                HttpURLConnection connection;
                try{
                    URL postURL = new URL(url);
                    connection = (HttpURLConnection) postURL.openConnection();
                    connection.setConnectTimeout(5000);
                    connection.setRequestMethod("POST");
                    connection.setDoInput(true);
                    connection.setDoOutput(true);
                    connection.setUseCaches(false);
                    connection.setRequestProperty("Content-Type","application/json");
                    connection.setRequestProperty("Content-Length",String.valueOf(bytes.length));
                    OutputStream outputStream = connection.getOutputStream();
                    outputStream.write(bytes);
                    outputStream.flush();
                    outputStream.close();
                    int response = connection.getResponseCode();
                    if (response == HttpURLConnection.HTTP_OK){
                        String result = StreamToStringUtil.StreamToString(connection.getInputStream());
                        Map<String, Object> params = new HashMap<>();
                        params.put("postResult", result);
                        mWXSDKInstance.fireGlobalEventCallback("httpPostResult", params);
                    }
                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
