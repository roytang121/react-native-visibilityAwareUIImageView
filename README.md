# Installation
`npm install`
`react-native run-ios`

# How it works
Each UIImageView listens to ListView Visibility event from RN JS. `[UIImageView image]` is removed and encoded to `NSData` by system `UIImageJPEGRepresentation` method,
when the view is out of screen. Cached `NSData` will be decoded to `UIImage` dynamically.