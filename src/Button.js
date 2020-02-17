import React, { useState } from "react";


function StatefulFn() {
  const [color, setColor] = useState(false);

  function onClick() {
    const colors = [
      "#008F68",
      "#6DB65B",
      "#4AAE9B",
      "#FAE042",
      "#EFBB35",
      "#DFA612"
    ];

    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      Click to Change Button Color
    </button>
  );
}

export default StatefulFn;