import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  open: false,
  setopen: () => {},
});

export default function MenuManager(props) {
  const [open, setopen] = useState(false);
  return (
    <MenuContext.Provider value={{ open, setopen }}>
      {props.children}
    </MenuContext.Provider>
  );
}

 
