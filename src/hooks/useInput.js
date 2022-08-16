import { useState } from "react";

function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleInputChange];
}

export default useInput;
