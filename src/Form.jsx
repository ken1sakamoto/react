// import React from "react";
import "./Form.css";
import React, { useState } from "react";


const Form = (props) => {
  const data = JSON.parse(props.data);
  const mPrefectures = Object.keys(data.prefectures).map(function (key) {
    return data.prefectures[key];
  });
  const mMunicipalities = Object.keys(data.municipalities).map(function (key) {
    return data.municipalities[key];
  });

  const handleChange = (e) => {};

  //inputから入力された値の状態を管理
  const [text, setText] = useState("");
 
  

  return (
    <div className="container">
        <header className="Form-header">
      <b>{props.title}</b>
      <hr />
      <div>
        <label>User Name：</label>
        <input 
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
         <p>{text}</p>
      </div>
      <div className="spacer" />
      <div>
        <label>Enter Password：</label>
        <input type="password" />
      </div>
      <div className="spacer" />
      <div>
        <label>Confirm Password：</label>
        <input type="password" />
      </div>
      <div className="spacer" />
      <div>
        <label>Types：</label>
        <select onChange={(e) => handleChange(e)}>
          {mPrefectures.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      
      <div className="spacer" />
      <div>
        <label>Color：</label>
        <select onChange={(e) => handleChange(e)}>
          {mMunicipalities.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="spacer" />
      <button>登録</button>
      </header>
    </div>
  );
};

export default Form;