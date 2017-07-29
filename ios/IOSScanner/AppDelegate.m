//
//  AppDelegate.m
//  IOSScanner
//
//  Created by yangxu on 2017/7/27.
//  Copyright © 2017年 yangxu. All rights reserved.
//

#import "AppDelegate.h"
#import <WeexSDK/WeexSDK.h>
#import <WeexSDK/WXSDKEngine.h>
#import "WXScannerComponent.h"
#import <TBWXDevtool/WXDevtool.h>
#import "ViewController.h"
#import "WXHttpModule.h"
@interface AppDelegate ()
@property(nonatomic,strong)WXSDKInstance *instance;

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    //business configuration
//    [WXDevTool setDebug:YES];
//    [WXDevTool launchDevToolDebugWithUrl:@"ws://30.30.31.7:8088/debugProxy/native"];

    [WXAppConfiguration setAppGroup:@"AliApp"];
    [WXAppConfiguration setAppName:@"WeexDemo"];
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    //init sdk enviroment
    [WXSDKEngine initSDKEnviroment];
    [WXSDKEngine registerModule:@"http" withClass:[WXHttpModule class]];
    [WXSDKEngine registerComponent:@"wxscanner" withClass:[WXScannerComponent class]];
    [WXLog setLogLevel: WXLogLevelLog];
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    ViewController * viewController = [[ViewController alloc] init];
    
    self.window.rootViewController = viewController;
    [self.window makeKeyAndVisible];
    
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

-(WXSDKInstance*)getWXInstance{
    if (!_instance) {
        _instance = [[WXSDKInstance alloc] init];
    }
    return _instance;
}

@end
