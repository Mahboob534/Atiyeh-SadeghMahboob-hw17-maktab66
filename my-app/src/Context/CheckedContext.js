import React, { useState, createContext } from "react";
export const CheckedContext = createContext({});

const CheckedProvider = ({ children }) => {
  //const [isChecked, setIsChecked] = useState([]);
  const [jobTitle, setJobTitle] = useState([]);
  //console.log(jobTitle);
  //console.log(isChecked);
  return (
    <CheckedContext.Provider
      value={{ jobTitle, setJobTitle }}
    >
      {children}
    </CheckedContext.Provider>
  );
};

export default CheckedProvider;
