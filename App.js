import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  ScrollView, 
  TouchableOpacity
} from 'react-native';

import Note from './App/Components/Note';

export default class ToDoApp extends React.Component {
  
  state = {
    noteArray: [{'date': '07/04/2020', 'note': 'Hello world!'}],
    noteText: '',
  }

  render() {
    
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNote(key)} />
    });
      
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NOTES</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton}
            onPress={this.addNote.bind(this)}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput style={styles.textInput}
            placeholder='Write here...' 
            placeholderTextColor='gray' 
            onChangeText={(noteText) => this.setState({noteText})}
          >
          </TextInput>
        </View>
      </View>
    );
  }

  addNote() {
    
    if (this.state.noteText) {
      
      var d = new Date();
      this.state.noteArray.push( {'date': d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear(), 'note': this.state.noteText} );
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
      
    }
    
  }

  deleteNote(key) {
    
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
    
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header : {
    backgroundColor: '#FFD52E',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#FFD52E',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#E5E5E5',
    borderTopWidth: 2,
    borderTopColor: '#ddd',
  }
});
