import Alert from "./components/Alert";
//import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // //we can now use Message component just like regualar html elements
  // const handleSelectItem = (item: String, index: number) => {
  //   console.log("I am a changed function", item, index);
  // };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;
