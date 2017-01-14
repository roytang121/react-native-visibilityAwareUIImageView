//
//  RCTDataImageView.h
//  demo
//
//  Created by Roy Tang on 13/1/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#ifndef RCTDataImageView_h
#define RCTDataImageView_h

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
//#import "RCTEventDispatcher.h"
//#import "RCTView.h"

@class RCTEventDispatcher;

@interface RCTDataImageView : UIImageView

@property (nonatomic, strong) NSString *src;
@property (nonatomic, strong) NSData *imageData;
@property (nonatomic, assign) BOOL isVisible;

- (instancetype) initWithEventDispatcher: (RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;
- (void) visibilityShouldChange: (BOOL)visible;

@end

#endif /* RCTDataImageView_h */
