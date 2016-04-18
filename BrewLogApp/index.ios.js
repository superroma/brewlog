/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

var 
    batchesUrl = 'http://localhost:5000/api/batches'

class BrewLogApp extends Component {  
  constructor(props) {
      super(props);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 != row2
          }),
          loaded: false,
      }
  }  
  componentDidMount() {
      this.fetchData()
  }
  fetchData() {
      fetch(batchesUrl)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.batches),
                loaded: true,
            })
        })
        .done()
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }  
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderBatch}
        style={styles.listView}
      />
    );
  }
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading batches...
        </Text>
      </View>
    );
  }
  renderBatch(batch) {
    return (
        <Text>
            {batch.name} - {batch.date}
        </Text>
    )   
  }
}

class BatchList extends Component {
    render() {
        var markup = state.batches.map(function(batch){
            return <Text>{batch.name} - {batch.date}</Text>
        })
        return (
            {markup}
        )
    }    
}
class Batch extends Component {
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('BrewLogApp', () => BrewLogApp);
