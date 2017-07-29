//
//  ViewController.m
//  IOSScanner
//
//  Created by yangxu on 2017/7/27.
//  Copyright © 2017年 yangxu. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WXSDKInstance.h>
#import "AppDelegate.h"
@interface ViewController ()
@property(nonatomic,strong)WXSDKInstance *instance;
@property(nonatomic,strong)UIView   *weexView;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(notificationRefreshInstance:) name:@"RefreshInstance" object:nil];
    [self render];

}
- (void)render{
       AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
    _instance = appDelegate.getWXInstance;
    _instance.viewController = self;
    _instance.frame = self.view.frame;
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
    };
    _instance.onFailed = ^(NSError *error) {
        //process failure
    };
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
    };
    NSString *url = [NSString stringWithFormat:@"file://%@/app.weex.js",[NSBundle mainBundle].bundlePath];
    [_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(notificationRefreshInstance:) name:@"RefreshInstance" object:nil];

}


- (void)notificationRefreshInstance:(NSNotification *)notification {
    [self render];
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
