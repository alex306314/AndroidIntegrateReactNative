import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import codePush from 'react-native-code-push';

export default class TestReactNative extends Component {
        sync(){
            var i = 0;
            codePush.sync(
      {
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      (status) => {
        switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log('=>> CHECKING_FOR_UPDATE')
            break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log('=>> DOWNLOADING_PACKAGE')
            // Show "downloading" modal
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            console.log('=>> INSTALLING_UPDATE')
            // Hide "downloading" modal
            break;
          case codePush.SyncStatus.UP_TO_DATE:
            console.log('=>> UP_TO_DATE')
            break;
          case codePush.SyncStatus.SYNC_IN_PROGRESS:
            console.log('=>> SYNC_IN_PROGRESS')
            break;
          case codePush.SyncStatus.UNKNOWN_ERROR:
            console.log('=>> UNKNOWN_ERROR')
            break;
        }
      },
      /* Update download modal progress */
      ({ receivedBytes, totalBytes, }) => {
        if(!i){
          console.log('==> total:' + totalBytes)
          i++;
        }
        console.log(receivedBytes)
      }
    );
  }
    componentDidMount(){
       // this.sync();
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World 5</Text>
        <TouchableOpacity onPress={()=>{
                this.sync();
            }}>
            <View style={{padding:10,backgroundColor:'green'}}>
                <Text style={{color:'white'}}>update</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});