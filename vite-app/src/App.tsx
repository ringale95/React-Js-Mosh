//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";

import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false); //here the initial state if akert is hidden or false
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisible(true)}>
        My-Button
      </Button>
    </div>
  );
}

export default App;
