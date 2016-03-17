var React = require('react-native');
var {
  StyleSheet,
  Text,
  Image,
  View
} = React;

var Forecast = React.createClass({
  render: function() {
    return (
      <View>
        <Image style={styles.icon} source={{uri: this.props.icon}}/>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          City : {this.props.city}
        </Text>
        <Text style={styles.mainText}>
          Current condition : {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp} °C
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  icon: {
    width: 50,
    height: 50
  }
});

module.exports = Forecast;
