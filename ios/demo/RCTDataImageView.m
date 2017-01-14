//
//  RCTDataImageView.m
//  demo
//
//  Created by Roy Tang on 13/1/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTDataImageView.h"

@implementation RCTDataImageView {
  RCTEventDispatcher *_eventDispatcher;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  CGRect sq = CGRectMake(0, 0, 400.0, 400.0);
  self.src = [[NSString alloc] initWithString:@"no source"];
  if ((self = [super initWithFrame:sq])) {
    _eventDispatcher = eventDispatcher;
  }
  
  return self;
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  [self setBackgroundColor:[UIColor darkGrayColor]];
  
  UILabel *label = [[UILabel alloc] init];
  if (_src != NULL) {
    label.text = _src;
  }
  [label sizeToFit];
  [self addSubview:label];
}

- (void)setSrc:(NSString *)src
{
  _src = [src copy];
}

- (void)visibilityShouldChange:(BOOL)visible
{
  if (!visible) {
    [self setImage:nil];
  } else {
    if (_imageData != NULL) {
      UIImage *image = [[UIImage alloc] initWithData:_imageData];
      [self setImage:image];
    } else {
//       load image
      NSString *imagePath = [[NSBundle mainBundle] pathForResource:@"8" ofType:@"png"];
      UIImage *image = [[UIImage alloc] initWithContentsOfFile:imagePath];
      [self setImage:image];
    
      _imageData = UIImageJPEGRepresentation(image, 0.7);
    }
  }
}

- (void)setIsVisible:(BOOL)isVisible
{
  [self visibilityShouldChange:isVisible];
}

@end
