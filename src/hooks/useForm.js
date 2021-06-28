import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setInputs(...inputs, { [target.name]: target.value });
  };

  const reset = () => {
    setInputs(initialState);
  };

  return [inputs, handleInputChange, reset];
};
