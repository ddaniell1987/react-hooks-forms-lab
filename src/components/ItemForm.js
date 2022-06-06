import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [input, setInput] = useState("");
  const [itemFormCategory, setItemFormCategory] = useState("Produce")
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: input,
    category: itemFormCategory,
  });

  function handleInput(event) {
    setInput(event.target.value)
    setNewItem({...newItem, name: event.target.value})
  }
  function handleItemFormCategory(event) {
    setItemFormCategory(event.target.value)
    setNewItem({newItem, category: event.target.value})
  }
  return (
    <form onSubmit={(event)=> {
      event.preventDefault()
      onItemFormSubmit({...newItem, id:uuid()})
    }}
    
    className="NewItem">
      <label>
        Name:
        <input onChange={handleInput} value={input} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemFormCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
