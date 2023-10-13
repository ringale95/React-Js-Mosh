import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const connect = () => console.log("connecting");
  const disconnect = () => console.log("disconnecting");
  useEffect(() => {
    connect();

    //disconnect below for whatever connected above//
    return () => disconnect();
  });
  return <div></div>;
};

export default App;
