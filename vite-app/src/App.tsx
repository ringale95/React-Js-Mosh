//import ListGroup from "./components/ListGroup";

import Button from "./components/button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("clicked")}>
        My-Button
      </Button>
    </div>
  );
}

export default App;
