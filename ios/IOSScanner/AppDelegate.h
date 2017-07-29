//
//  AppDelegate.h
//  IOSScanner
//
//  Created by yangxu on 2017/7/27.
//  Copyright © 2017年 yangxu. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK/WeexSDK.h>
@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;
-(WXSDKInstance*)getWXInstance;

@end

