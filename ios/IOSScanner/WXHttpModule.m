//
//  WXHttpModule.m
//  IOSScanner
//
//  Created by yangxu on 2017/7/27.
//  Copyright © 2017年 yangxu. All rights reserved.
//
#import <AFNetworking.h>
#import "WXHttpModule.h"
@implementation WXHttpModule
WX_EXPORT_METHOD(@selector(postwithUrl:params:callback:))
-(void)postwithUrl:(NSString*)url params:(NSDictionary*)param callback:(WXModuleCallback)callback{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    manager.requestSerializer = [AFJSONRequestSerializer serializer];
    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    [manager.responseSerializer setStringEncoding:NSUTF8StringEncoding];
    [manager POST:url
       parameters:param
         progress:nil
          success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
              NSData *data = (NSData *)responseObject;
              NSError *error;
              NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:&error];
              callback(@{@"success":dic});
          }failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
              callback(@{@"fail":error.description});
          }];
}
@end
