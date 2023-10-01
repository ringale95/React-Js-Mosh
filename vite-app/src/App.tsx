//import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup/ListGroup";
//if we dont supply folder it looks for index.ts

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
