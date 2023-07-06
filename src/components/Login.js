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

    return (
        <div className={styles['box']}>
            <h2>Login</h2>

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
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;