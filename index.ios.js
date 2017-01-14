// @flow

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

import DataImageView from './RCTDataImageView.ios'

const listenToVisibility = true

export default class demo extends Component {

  constructor (props) {
    super(props)

    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1 !== r2
    }})

    this.state = {
      dataSource: dataSource.cloneWithRows(this._makeData([])),
      visibleRows: []
    }
  }

  _makeData (visibleRows=[]) {
    let set = []

    for (var i = 0; i < 1000; i++) {
      set.push(
        {
          data: i,
          visible: visibleRows[i] || false
        }
      )
    }
    return set
  }

  _renderRow (rowData, sectionID, rowID) {
    const imageID = rowID % 8 + 1
    const path = './Images/1.jpg'
    // const isVisible = this.state.visibleRows.indexOf(rowID) !== -1
    // console.log(`Row ${rowID}: ${this.state[rowID]}`)
    // console.log(this.state)
    if (listenToVisibility) {
      return <DataImageView src={'./Images/8.jpg'} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} isVisible={rowData.visible} />
    } else {
      return <DataImageView src={'./Images/8.jpg'} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} isVisible={true} />
    }
    // switch (imageID) {
      // case 1:
      //   return <DataImageView source={require('./Images/1.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 2:
      //   return <DataImageView source={require('./Images/2.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 3:
      //   return <DataImageView source={require('./Images/3.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 4:
      //   return <DataImageView source={require('./Images/4.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 5:
      //   return <DataImageView source={require('./Images/5.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 6:
      //   return <DataImageView source={require('./Images/6.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 7:
      //   return <DataImageView source={require('./Images/7.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
      // case 8:
      //   return <DataImageView source={require('./Images/8.jpg')} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} />
    //   default:
    //     return <DataImageView src={'./Images/8.jpg'} style={{ flex: 1, resizeMode: 'contain', width: 300, height: 300}} isVisible={this.state[rowID]} />
    // }
  }

  _onChangeVisibleRows (visibleRows, changedRows) {
    // console.log(Object.keys(visibleRows.s1))
    // console.log(changedRows.s1)
    if (!listenToVisibility) { return }

    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1 !== r2
    }})

    this.setState({
      dataSource: dataSource.cloneWithRows(this._makeData(visibleRows.s1))
    })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        onChangeVisibleRows={this._onChangeVisibleRows.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo', () => demo);
