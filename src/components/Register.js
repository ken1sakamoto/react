import React, { useState, useEffect } from 'react';
import styles from '../Login_index.module.css';
import { useNavigate } from 'react-router-dom';
import backImage from './back.jpg';

const Register = (props) => {
    const data = JSON.parse(props.data);
    const mPrefectures = Object.values(data.prefectures);
    const mMunicipalities = Object.values(data.municipalities);

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [pokeType, setPokeType] = useState('');
    const [pokeColor, setPokeColor] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    const fetchData = async () => {
        try {
            const formData = {
                text,
                password,
                password2,
                pokeType,
                pokeColor,
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            const apiUrl = 'https://jsonplaceholder.typicode.com/users';

            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful!', data);

            localStorage.setItem('password2', JSON.stringify(password2));
        } catch (error) {
            console.error('Registration failed:', error);

        }
    };

    const handleRegister = () => {
        fetchData()
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.error('Registration failed:', error);
            });
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#F0F4F8',
            },
            topbar: {
                width: '100%',
                height: 100,
                backgroundColor: '#FFFFFF',
                justifyContent: 'flex-end',
            },
            topbarInner: {
                alignItems: 'center',
                bottom: 8,
            },
            topbarRight: {
                position: 'absolute',
                right: 19,
                bottom: 8,
            },
            topbarLeft: {
                position: 'absolute',
                left: 19,
                bottom: 8,
            },
            mode: {
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'row',
            },
            modePictures: {
                width: 120,
                height: 120,
            },
        });
    };

    return (
        <div className={styles.box}>
            <h2>Register</h2>
            <form>
                <div>
                    <label>User Name:</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <br></br>

                <div>
                    <label>Enter Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br>
                </br>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                </div>
                <br></br>
                <div>
                    <label>Type:</label>
                    <select value={pokeType} onChange={(e) => setPokeType(e.target.value)}>
                        {mPrefectures.map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <p>{pokeType}</p>

                <div>
                    <label>Color:</label>
                    <select value={pokeColor} onChange={(e) => setPokeColor(e.target.value)}>
                        {mMunicipalities.map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <p>{pokeColor}</p>

                <button type="button" onClick={handleRegister}>
                    Register
                </button>
                <br></br><br></br>
                <div className="box">
{/*色々変えた*/}
                    <table border cellpadding="4" cellspacing="2">
                        <tr>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                            <td><img style={{ width: 120, height: 120 }} src={backImage} alt="Background" /></td>
                        </tr>
                    </table>
                </div>
            </form>
        </div>

    );
};

export default Register;

/*import { useState, useEffect } from 'react';
import styles from '../Login_index.module.css';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
    const data = JSON.parse(props.data);
    const mPrefectures = Object.keys(data.prefectures).map(function (key) {
        return data.prefectures[key];
    });
    const mMunicipalities = Object.keys(data.municipalities).map(function (key) {
        return data.municipalities[key];
    });
    const handleChange = (e) => { };
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();
    const [poke_type, setType] = useState('');
    




    useEffect(() => {
        // マウント時の処理などを記述
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const formData = {
                text,
                password,
                password2, // nicknameをフォームデータに含める
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            const apiUrl = 'https://jsonplaceholder.typicode.com/users';

            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful!', data);
            // ここでトークンを保存するなどの処理を行う
            localStorage.setItem('password2', JSON.stringify(password2));
            // nicknameを文字列としてローカルストレージに保存
        } catch (error) {
            console.error('Registration failed:', error);
            // エラーメッセージを表示するなどの処理を行う
        }
    };

    const handleRegister = () => {
        // Registerボタンがクリックされたときの処理を記述
        fetchData();
        navigate('/login'); // 登録後にログインページにリダイレクト
    };

  


    return (
        <div className={styles['box']}>
            <h2>Register</h2>
            <form>
                <div>
                    <label>User Name：</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div>
                    <label>Enter Password：</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>

                    <label>Confirm Password：</label>
                    <input
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>



                <div>
                    <label>Type ：</label>
                    <select onChange={(e) => handleChange(e)}>
                        {mPrefectures.map((item) => (
                            <option value={item.id}>{item.name}</option>

                        ))}
                        value={poke_type}
                        onChange={(e) => setType(e.target.value)}
                    </select>
                </div>
                <p>{poke_type}</p>

                <div>
                    <label>Color：</label>
                    <select onChange={(e) => handleChange(e)}>
                        {mMunicipalities.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>



                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};


export default Register;

*/

{/*
import { useState, useEffect } from 'react';
import styles from '../Login_index.module.css';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const data = JSON.parse(props.data);
  const mPrefectures = Object.keys(data.prefectures).map(function (key) {
    return data.prefectures[key];
  });
  const mMunicipalities = Object.keys(data.municipalities).map(function (key) {
    return data.municipalities[key];
  });
  const handleChange = (e) => {};
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate();
 


  useEffect(() => {
    // マウント時の処理などを記述
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const formData = {
        text,
        password,
        password2, // nicknameをフォームデータに含める
      };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };

      const apiUrl = 'https://jsonplaceholder.typicode.com/users';

            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            console.log('Registration successful!', data);
            // ここでトークンを保存するなどの処理を行う
            localStorage.setItem('password2', JSON.stringify(password2));
            // nicknameを文字列としてローカルストレージに保存
        } catch (error) {
            console.error('Registration failed:', error);
            // エラーメッセージを表示するなどの処理を行う
        }
    };

    const handleRegister = () => {
        // Registerボタンがクリックされたときの処理を記述
        fetchData();
        navigate('/login'); // 登録後にログインページにリダイレクト
    };

    /*const Form = (props) => {
            const data = JSON.parse(props.data);
            const mPrefectures = Object.keys(data.prefectures).map(function (key) {
                return data.prefectures[key];
            });
            const mMunicipalities = Object.keys(data.municipalities).map(function (key) {
                return data.municipalities[key];
            });
        
            const handleChange = (e) => { };
        

            return (
                <div className={styles['box']}>
                    <h2>Register</h2>
                    <form>
                        <div>
                            <label>User Name：</label>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            <label>Enter Password：</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
        
                            <label>Confirm Password：</label>
                            <input
                                type="password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)} 
                            />
                        </div>
        
        
        
                        <div>
                            <label>Type ：</label>
                            <select onChange={(e) => handleChange(e)}>
                                {mPrefectures.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                   
                                ))}
                            </select>
                        </div>
        
                        <div>
                            <label>Color：</label>
                            <select onChange={(e) => handleChange(e)}>
                                {mMunicipalities.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="button" onClick={handleRegister}>
                            Register
                        </button>
                    </form>
                </div>
            );
        };
        
        
        export default Register;
    */}   