import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import GameApp from './components/game/GameApp';
//import GameApp from './components/Game2/GameApp';
import { useState } from 'react';
import "./App.css";

import React from 'react';

import logo from './logo.svg';

import './App.css';

 




 



function App() {
  const [theme] = useState('dark'); // 例としてテーマを設定
  const dataList = {
    prefectures: [
      {
        id: 1,
        name: "normal",
      },
      {
        id: 2,
        name: "fighting",
      },
      {
        id: 3,
        name: "flying",
      },
      {
        id: 4,
        name: "poison",
      },
      {
        id: 5,
        name: "ground",
      },{
        id: 6,
        name: "rock",
      },{
        id: 7,
        name: "bug",
      },{
        id: 8,
        name: "	ghost",
      },{
        id: 9,
        name: "steel",
      },{
        id: 10,
        name: "fire",
      },{
        id: 11,
        name: "water",
      },{
        id: 12,
        name: "grass",
      },{
        id: 13,
        name: "electric",
      },{
        id: 14,
        name: "	psychic",
      },{
        id: 15,
        name: "ice",
      },
      {
        id: 16,
        name: "dragon",
      },
      {
        id: 17,
        name: "dark",
      },
      {
        id: 18,
        name: "fairy",
      },
    
    ],
    municipalities: [
      {
        id: 1,
        prefectureId: 1,
        name: "black",
      },
      {
        id: 2,
        prefectureId: 1,
        name: "blue",
      },
      {
        id: 3,
        prefectureId: 3,
        name: "brown",
      },
      {
        id: 4,
        prefectureId: 4,
        name: "gray",
      },
      {
        id: 5,
        prefectureId: 5,
        name: "green",
      },
      {
        id: 6,
        prefectureId: 6,
        name: "pink",
      },
      {
        id: 7,
        prefectureId: 7,
        name: "purple",
      },
      {
        id: 8,
        prefectureId: 8,
        name: "red",
      },
      {
        id: 9,
        prefectureId: 9,
        name: "white",
      },
      {
        id: 10,
        prefectureId: 10,
        name: "yellow",
      },
    ],
  };

  const datas = JSON.stringify(dataList);


  return (



    <Router>
      <div className={`app ${theme}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/GameApp">GameApp</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register data ={datas}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/GameApp" element={<GameApp/>} />

        </Routes>
       
      </div>
    </Router>

  );
}
export default App;

/*import "./App.css";
import Form from "./Form";


function App() {

  const dataList = {
    prefectures: [
      {
        id: 1,
        name: "ノーマル",
      },
      {
        id: 2,
        name: "ほのお",
      },
      {
        id: 3,
        name: "みず",
      },
      {
        id: 3,
        name: "くさ",
      },
    ],
    municipalities: [
      {
        id: 1,
        prefectureId: 1,
        name: "みどり",
      },
      {
        id: 2,
        prefectureId: 1,
        name: "あお",
      },
      {
        id: 1,
        prefectureId: 1,
        name: "あか",
      },
      {
        id: 1,
        prefectureId: 1,
        name: "むらさき",
      },
    ],
  };
  const datas = JSON.stringify(dataList);
  return (
    <div>
      <Form title={"新規登録"} data={datas} />
    </div>
  );
}

export default App;
*/