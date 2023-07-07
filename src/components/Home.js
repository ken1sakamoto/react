import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from '../Login_index.module.css';




const Login = () => {

  const [text, setText] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();







  const handleLogin = () => {

    // ログインの処理を実装する

    if (text.trim() !== '' && password.trim() !== '') {

      // ログイン成功の場合、トークンを保存するなどの処理を行う

      console.log("ログインに成功しました。");

      // 例: トークンをローカルストレージに保存する

      localStorage.setItem('token', 'example_token');




      // ダッシュボードページにリダイレクトする

      navigate('/dashboard');

    } else {

      // ログイン失敗の場合の処理を行う（例: エラーメッセージの表示）

      console.log('ログインに失敗しました');

    }

  };




  const handleButtonClick = () => {

    // Registerに遷移

    navigate('/register');

  };




  return (

    <div className={styles['box']}>




      <form>

        <div>

          <label className={styles.label} style={{ letterSpacing: '0px', marginLeft: '29px' }}> UserName：</label>

          <input

            type="text"

            value={text}

            onChange={(e) => setText(e.target.value)}

          />

        </div>

        <br></br>

        <div>

          <label className={styles.label} style={{ letterSpacing: '0px', marginLeft: '29px' }}>Password：</label>

          <input

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </div>

        <br></br><br></br><br></br>

        <button type="button" onClick={handleLogin} style={{ letterSpacing: '2px' }}>

          Login

        </button>

        <br></br>

        <button type="button" onClick={handleButtonClick} style={{ letterSpacing: '2px', padding: '0.3rem 0.2rem', fontSize: '1px' }}>

          Register

        </button>

      </form>

    </div>

  );

};




const Home = () => {

  return (

    <>

      <div>

        <h1></h1>

      </div>

      <div style={{ marginTop: '150px' }}>

        <img

          src="https://fontmeme.com/permalink/230705/38b5dedbd06d6143bfa727da6dd260b2.png"

          alt="font-pokemon-logo"

          border="0"

          width="800"

        />

      </div>

      <Login />

    </>

  );

};




export default Home;