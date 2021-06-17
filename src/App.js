import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Show from "./components/Show";

function App() {
  const [word, setWord] = useState({word: "Hej hur mår du?..."});
  //let translatedWord = "";

  const getWord = async (details) => {
    console.log(details);
 
    const aip_call = await fetch(
      `https://api.mymemory.translated.net/get?q=${details.word}!&langpair=swe|${details.values}`
    );
    const data = await aip_call.json();
    let translatedWord = data.matches[0].translation;
    console.log(translatedWord)

    setWord({
       word: translatedWord
     });
    console.log(word.word)
 
  };

  return (
    <div className="App">
      <Header />
      <Form getWord={getWord} />
      <Show showThis={word.word}/>
    </div>
  );
}

export default App;
