import { useState } from "react";
import Expandable from "./components/Expandable";

const App = () => {
  return (
    <div>
      <Expandable maxCharLength={20}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
        cupiditate impedit, et id vitae iusto minima libero? Autem animi
        perferendis quam modi iste id libero vel deleniti corporis debitis, enim
        est suscipit fugiat officia earum necessitatibus nobis cum recusandae
        numquam exercitationem, ex praesentium, sed deserunt! Odio corrupti
        deserunt porro mollitia?
      </Expandable>
    </div>
  );
};

export default App;
