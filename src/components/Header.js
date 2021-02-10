import React from "react";
import Search from "./Search";

function Header() {
  return (
    <header className="header">
      <h1 className="header_title">Dictionary</h1>
      <Search />
    </header>
  );
}

export default Header;
