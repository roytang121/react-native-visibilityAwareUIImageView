//
//  RCTDataImageViewManager.m
//  demo
//
//  Created by Roy Tang on 13/1/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTDataImageViewManager.h"
#import "RCTDataImageView.h"

@implementation RCTDataImageViewManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RCTDataImageView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(src, NSString)

- (NSDictionary<NSString *,id> *)constantsToExport
{
  return @{};
}

RCT_EXPORT_METHOD(onVisibilityChange: (BOOL)visible)
{
  [((RCTDataImageView *)self.view) visibilityShouldChange:visible];
}

RCT_EXPORT_VIEW_PROPERTY(isVisible, BOOL)

@end
