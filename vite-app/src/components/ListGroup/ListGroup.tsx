//import styles from "./ListGroup.module.css";
import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
//above will not work as doesnt know type of objects of the library may be resolved in future version

//here we define all the styles of the ul and return value is react component that has all the styles appleid
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
padding 5px 0;
background: ${(props) => (props.active ? "blue" : "none")}
`;

interface Props {
  items: string[];
  heading: string;
  //structure of props
  onSelectItem: (item: String, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              //call the function
              onSelectItem(item, index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
