import React from 'react';
import { 
  AppRegistry,
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

export default class ToDoApp extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>
          {this.props.val.date}
        </Text>
        <Text style={styles.noteText}>
          {this.props.val.note}
        </Text>
        <TouchableOpacity style={styles.deleteButton}
          onPress={this.props.deleteMethod}
        >
          <Text style={styles.deleteButtonText}>x</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#FFD52E',
  },
  deleteButton: {
    position: 'absolute',
    backgroundColor: '#FFD52E',
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    right: 10,
    zIndex: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
