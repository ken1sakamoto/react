import { useNavigate } from 'react-router-dom';
import styles from '../Login_index.module.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // トークンの削除やセッションのクリアなど、ログアウトに関する処理を実装する

        // 例: ローカルストレージからトークンを削除
        localStorage.removeItem('token');
        localStorage.removeItem('nickname');
        // ログアウト後にログインページにリダイレクトする
        navigate('/login');
        console.log("ログアウトしました。")
    };

    return (
        <div className={styles['box']}>
            <h2>Dashboard</h2>
            {localStorage.getItem('token') && (
                <p>Welcome, {localStorage.getItem('nickname')}!</p>
            )}
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;