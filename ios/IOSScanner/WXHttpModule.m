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
WX_EXPORT_METHOD(@selector(postwithDic:callback:))
-(void)postwithDic:(NSString *)weexDic callback:(WXModuleCallback)callback{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    manager.requestSerializer = [AFJSONRequestSerializer serializer];
    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    [manager.responseSerializer setStringEncoding:NSUTF8StringEncoding];
    NSData *jsonData = [weexDic dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:nil];
    NSString *url = [dic valueForKey:@"url"];
    NSDictionary *sendParam = [[NSDictionary alloc]initWithDictionary:[dic valueForKey:@"sendParam"]];
    [manager POST:url
       parameters:sendParam
         progress:nil
          success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
              NSData *data = (NSData *)responseObject;
              NSError *error;
              NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:&error];
              callback(@{@"success":dic[@"error"]});
          }failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
              callback(@{@"fail":error.description});
          }];
}
@end
