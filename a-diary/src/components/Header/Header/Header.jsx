import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/modules/users';

export default function Header() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo} style={{ fontSize: '50px' }}>
        <Link to="/" className={styles.logoText} style={{ fontSize: '50px' }}>
          Diary
        </Link>
      </h1>

      <nav className={styles.navList}>
        {isLogin ? (
          <Link
            onClick={() => {
              dispatch(logout());
            }}
            className={styles.navItem}
          >
            로그아웃
          </Link>
        ) : (
          <>
            <Link to="/login" className={styles.navItem}>
              로그인
            </Link>
            <Link to="/signup" className={styles.navItem}>
              회원가입
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
