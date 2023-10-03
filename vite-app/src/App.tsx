import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Aniruddha" } });
  };

  return (
    <div>
      Name: {game.player.name}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default App;
