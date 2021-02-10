import React from "react";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

function MainContent() {
  const { wiki, jisho } = useSelector((state) => state.word);
  const definitions = wiki
    .toString()
    .match(new RegExp("の用語解説 -" + "(.*)" + `"`));

  return (
    <>
      {wiki.length > 0 && (
        <main className="searched-word">
          <div className="searched-word__info">
            <div className="searched-word__word">
              <p>{jisho && jisho.length != 0 && jisho.data[0].slug}</p>
            </div>
            <div className="searched-word__reading">
              <p>
                {jisho &&
                  jisho.length != 0 &&
                  jisho.data[0].japanese[0].reading}
              </p>
            </div>
            <div className="searched-word__hint">
              <p>
                {jisho &&
                  jisho.length != 0 &&
                  jisho.data[0].senses[0].english_definitions[0]}
              </p>
            </div>
          </div>
          <div className="searched-word__definition">
            <p>{definitions && definitions[1]}</p>
          </div>
          <CopyToClipboard text={definitions && definitions[1]}>
            <button className="clipboard-btn">Copy to clipboard</button>
          </CopyToClipboard>
        </main>
      )}
    </>
  );
}

export default MainContent;
