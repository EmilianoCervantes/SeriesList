import React, { Component } from 'react';
import ActorList from './components/ActorList.js';
import AddList from './components/AddList.js';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { series: [] };
    this.AddList = this.AddList.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }
  componentWillMount(){
    axios.get("http://api.tvmaze.com/shows/82/cast")
      .then(res => {
        this.setState( { series:res.data } );
      }
    )
  }
  AddList(name, id){
    const serie = [
      ...this.state.series,
      {name,id}
    ]
    this.setState( { serie } );
  }
  deleteList(id){
    const list = this.state.series;
    const newList = list.filter(
      (a) => {
        return a.name !== id
      }
    );
    this.setState( { series:newList } );
  }
  render() {
    return (
      <div className="App">
        <AddList onNewList={this.AddList} />
        <ActorList series={this.state.series} onDeleteList={this.deleteList} />
      </div>
    );
  }
}

export default App;
