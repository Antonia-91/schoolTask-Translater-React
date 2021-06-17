import React, { useState } from "react";

const Form = ({getWord}) => {

    const [ details, setDetails ] = useState({ word: "", values:"" })

    const submitHandler = (e) => {
        e.preventDefault();
        getWord(details)
    }

  return <form onSubmit={submitHandler}>
      <label htmlFor="word">Word</label>
      <input type="text" name="word" id="word" onChange={(e) => setDetails({...details, word: e.target.value})} value={details.word}/>

      <select
            onChange={(e) => setDetails({ ...details, values: e.target.value })} value={details.values}
          >
            <option value="en">Engelska</option>
            <option value="it">Italienska</option>
            <option value="fi">Fiska</option>
            <option value="sw">Svenska</option>
            <option value="ru">Ryska</option>
            <option value="th">Thailänka</option>
          </select>

          <input type="submit" value="TRANSLATE" />

  </form>;
};

export default Form;
