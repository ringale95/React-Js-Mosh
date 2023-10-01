import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  likes: number;
}

const like = ({ likes }: Props) => {
  const [isActive, setActive] = useState(false);
  const [count, setCount] = useState(likes);

  return (
    <div onClick={() => setActive(!isActive)}>
      {isActive ? (
        <AiFillHeart color="#ff6b81" onClick={() => setCount(count - 1)} />
      ) : (
        <AiOutlineHeart onClick={() => setCount(count + 1)} />
      )}
      <br />
      {count}
    </div>
  );
};

export default like;
