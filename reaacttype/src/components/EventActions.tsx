import React, { useState } from "react";

const EventActions = () => {
  const [value, setValue] = useState("");
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };
  return (
    <div>
      <button onClick={(e) => handleClick(e, 4)}>Sil</button>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default EventActions;
