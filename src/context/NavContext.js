import { createContext, useState, useEffect } from "react";

export const NavContext = createContext();

export const NavProvider = (props) => {
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  });

  return (
    <NavContext.Provider value={{ offset, active, setActive }}>
      {props.children}
    </NavContext.Provider>
  );
};
