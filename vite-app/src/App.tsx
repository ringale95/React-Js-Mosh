import Button from "./components/Buttons/button";

const App = () => {
  return (
    <div>
      <Button
        onClick={function () {
          console.log("Hi Mom!");
        }}
      >
        My-Button
      </Button>
    </div>
  );
};

export default App;
