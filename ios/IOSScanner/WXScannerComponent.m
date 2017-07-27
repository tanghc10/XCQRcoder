//
//  WXScannerComponent.m
//  IOSScanner
//
//  Created by yangxu on 2017/7/27.
//  Copyright © 2017年 yangxu. All rights reserved.
//

#import "WXScannerComponent.h"
#import <WeexSDK/WeexSDK.h>
#import <AVFoundation/AVFoundation.h>

@interface WXScannerComponent ()<AVCaptureMetadataOutputObjectsDelegate>
@property (nonatomic, strong) AVCaptureSession *captureSession;
@property (nonatomic, strong) AVCaptureVideoPreviewLayer *videoPreviewLayer;
@property (strong, nonatomic) UIView *boxView;
@property (strong, nonatomic) CALayer *scanLayer;

@end

@implementation WXScannerComponent
WX_EXPORT_METHOD(@selector(focus))
WX_EXPORT_METHOD(@selector(startReading))
WX_EXPORT_METHOD(@selector(stopReading))


- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance{
    if(self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]){
        self.view.frame = CGRectMake(0,0,[styles[@"width"] integerValue],[styles[@"height"] integerValue]);
        NSLog(@"%@",styles);
        NSLog(@"%@",self.view.layer.description);
        [self initScanner];
    }
    return self;
}

-(BOOL)initScanner{
    NSError *error;
    
    //1.初始化捕捉设备（AVCaptureDevice），类型为AVMediaTypeVideo
    AVCaptureDevice *captureDevice = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    
    //2.用captureDevice创建输入流
    AVCaptureDeviceInput *input = [AVCaptureDeviceInput deviceInputWithDevice:captureDevice error:&error];
    if (!input) {
        NSLog(@"%@", [error localizedDescription]);
        return NO;
    }
    AVCaptureMetadataOutput *captureMetadataOutput = [[AVCaptureMetadataOutput alloc] init];
    //4.实例化捕捉会话
    _captureSession = [[AVCaptureSession alloc] init];
    
    //4.1.将输入流添加到会话
    [_captureSession addInput:input];
    
    //4.2.将媒体输出流添加到会话中
    [_captureSession addOutput:captureMetadataOutput];
    
    //5.创建串行队列，并加媒体输出流添加到队列当中
    dispatch_queue_t dispatchQueue;
    dispatchQueue = dispatch_queue_create("myQueue", NULL);
    //5.1.设置代理
    
    //5.2.设置输出媒体数据类型为QRCode
    [captureMetadataOutput setMetadataObjectTypes:[NSArray arrayWithObject:AVMetadataObjectTypeQRCode]];
    
    [captureMetadataOutput setMetadataObjectsDelegate:self queue:dispatchQueue];

    
    //6.实例化预览图层
    _videoPreviewLayer = [[AVCaptureVideoPreviewLayer alloc] initWithSession:_captureSession];
    
    //7.设置预览图层填充方式
    [_videoPreviewLayer setVideoGravity:AVLayerVideoGravityResizeAspectFill];
    
    //8.设置图层的frame
    [_videoPreviewLayer setFrame:self.view.layer.bounds];
    
    //9.将图层添加到预览view的图层上
    [self.view.layer addSublayer:_videoPreviewLayer];
    
    //10.设置扫描范围
    captureMetadataOutput.rectOfInterest = CGRectMake(0.2f, 0.2f, 0.8f, 0.8f);
    //10.1.扫描框
    _boxView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.view.bounds.size.width , self.view.bounds.size.height)];
    _boxView.layer.borderColor = [UIColor blueColor].CGColor;
    _boxView.layer.borderWidth = 1.0f;
    
    [self.view addSubview:_boxView];
    
    //10.2.扫描线
    _scanLayer = [[CALayer alloc] init];
    _scanLayer.frame = CGRectMake(0, 0, _boxView.bounds.size.width, 1);
    _scanLayer.backgroundColor = [UIColor brownColor].CGColor;
    
    [_boxView.layer addSublayer:_scanLayer];
    
//    NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:0.2f target:self selector:@selector(moveScanLayer:) userInfo:nil repeats:YES];
//    
//    [timer fire];
//    
    //10.开始扫描

    return YES;
}

-(void)startReading{
    [_captureSession startRunning];
}

#pragma mark - AVCaptureMetadataOutputObjectsDelegate
- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection
{
    //判断是否有数据
    if (metadataObjects != nil && [metadataObjects count] > 0) {
        [self stopReading];
        dispatch_async(dispatch_get_main_queue(), ^{
            AVMetadataMachineReadableCodeObject *metadataObj = [metadataObjects objectAtIndex:0];
            if ([[metadataObj type] isEqualToString:AVMetadataObjectTypeQRCode]) {
                NSData *jsonData = [[metadataObj stringValue] dataUsingEncoding:NSUTF8StringEncoding];
                NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:nil];
                NSLog(@"%@",dic.description);
                NSString *IMEI;
                if(dic == nil){
                    NSString *string = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
                    NSArray *array = [string componentsSeparatedByString:@";"];
                    if (array.count >2) {
                        NSString *str = [array objectAtIndex:2];
                        IMEI = [[str componentsSeparatedByString:@":"] objectAtIndex:1];
                    }
                }else{
                    IMEI = [dic valueForKey:@"IMEI"];
                }
                
                if (IMEI != nil) {
                    [[[WXSDKInstance alloc] init] fireGlobalEvent:@"geolocation" params:@{@"key":@"value"}];

                }
            }
        });
        
    }
}

-(void)stopReading{
    [_captureSession stopRunning];
//    _captureSession = nil;
//    [_scanLayer removeFromSuperlayer];
//    [_videoPreviewLayer removeFromSuperlayer];
}

- (void)focus
{
    NSLog(@"you got it");
}
@end
