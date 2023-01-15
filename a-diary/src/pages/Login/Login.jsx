import React from 'react';
import styled from './Login';

export default function Login() {
  return (
    <div className={styled.login_box}>
      <div className={styled.login}>
        <input type="email"></input>
        <input type="password"></input>
        <button className={styled.push_button}></button>
        <button className={styled.register_button}></button>
      </div>
    </div>
  );
}
