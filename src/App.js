
import React,{Component}from 'react';
import ListItems1 from './ListItems';
import './App.css';
class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          text:'',
          key:''
        }
      }
      this.addItem = this.addItem.bind(this);
     this.handleInput = this.handleInput.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.removeAll = this.removeAll.bind(this);
      
    }

    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !==""){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
      }
    }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    removeAll(e){
      this.setState({
       items:[],
       currentItem:{
        text:'',
        key: ''
      }
      })
    }
    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
    }

    setUpdate(text,key){
     // console.log("items:"+this.state.items);
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          console.log(item.key +"    "+key)
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
    }
    render(){
        return(
         <div class="main-div">
           
        <div class="center-div" >
          <h1>TODO List</h1>
          <input type="text" id="item" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput} ></input>
          <button id="add" onClick={this.addItem}>Add</button>
        
       <div class="ul">
       <ListItems1 items={this.state.items}
        deleteItem={this.deleteItem}
        setUpdate={this.setUpdate}/>
       </div>
       <button id="removeall" onClick={this.removeAll}>Remove  All</button>
        </div>

         </div>
        
        )
    }
}
export default App