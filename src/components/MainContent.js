import React from "react";
import { useSelector } from "react-redux";

function MainContent() {
  const { wiki, jisho } = useSelector((state) => state.word);
  const definitions = wiki
    .toString()
    .match(new RegExp("の用語解説 -" + "(.*)" + `"`));
  return (
    <div>
      <p>{jisho && jisho.length != 0 && jisho.data[0].slug}</p>
      <p>{definitions && definitions[1]}</p>
    </div>
  );
}

export default MainContent;
