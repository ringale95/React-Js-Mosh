import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
