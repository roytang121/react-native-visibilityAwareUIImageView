// @flow

import React, { PropTypes, Component } from 'react'
import { requireNativeComponent, NativeModules, View } from 'react-native'

// NativeModules.RCTDataImageViewManager

// const RNRCTDataImageView = requireNativeComponent('RCTDataImageView', null)
export default requireNativeComponent('RCTDataImageView', null)

// class DataImageView extends Component {
//     _propTypes = {
//         ...View.propTypes,
//         src: PropTypes.string
//     }

//     render () {
//         return <RNRCTDataImageView
//             {...this.props}
//             />
//     }
// }


// export default DataImageView