//import { MouseEvent } from "react";
import { useState } from "react";

//Interfaces are used to describe the structure of object for Props
interface Props {
  items: string[];
  heading: string;
  //structure of props
  onSelectItem: (item: String, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //Or we can use to avoid props.everywhere in code use : function ListGroup({items,heading}:Props)
  //using this in App.tsx to make it generic  list items  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //items = []; //here we initialized it to null

  //const message = items.length === 0 ? <p>No item found</p> : null; //can declare the conditiion in a variable and render it in jsx as {message}
  //   const getMessage = () => {
  //     //or we can add func like this and instead of variable
  //     //Benefit of using function is it can have parameters and we can get different messages
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  //Event Handler- commenting as we are going to use 'useState'
  //const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              //call the function
              onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
