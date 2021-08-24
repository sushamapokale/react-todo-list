import react from 'react';
import './ListItems.css';
function ListItems(props)
{
    const items=props.items;
    const listItems=items.map(item =>
        {
            return<div className="list" key={item.key}>
            <p>
            <input type="checkbox" class="mark"/>
             <span>{item.text} </span>
            <span id="delete" onClick={()=>props.deleteItem(item.key)}>delete</span>
            </p>
            
            </div>
        })
   return(
       <div>{listItems}</div>
   )
}
export default ListItems