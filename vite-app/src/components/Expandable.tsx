import { useState } from "react";

interface Props {
  children: string;
  maxCharLength?: number;
}
const Expandable = ({ children, maxCharLength = 10 }: Props) => {
  const [isClicked, setClicked] = useState(false);
  const text = !isClicked ? children.substring(0, maxCharLength) : children;
  return (
    <div>
      {text}...
      <button onClick={() => setClicked(!isClicked)}>
        {" "}
        {!isClicked ? "more" : "less"}
      </button>
    </div>
  );
};

export default Expandable;
