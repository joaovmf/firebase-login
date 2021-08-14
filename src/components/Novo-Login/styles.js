import styled from 'styled-components'


export const AppWrap = styled.div `

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}

button {
  border: none;
  border-radius: 10px;
  outline: none;
  width: 100%;
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  background: #D3D800;
  cursor: pointer;
}

.login {
  min-height: 90vh;
  background: #e9e9e9;
  display: flex;
}

.login .loginContainer {
  padding: 60px;
  margin: auto;
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #004A65;
  box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
}

.login .loginContainer label {
  color: white;
  margin: 14px 0;
  display: block;
  font-size: 22px;
  line-height: 1;
}

.login .loginContainer input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 19px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  letter-spacing: 1px;
}

.login .loginContainer .btnContainer {
  width: 100%;
  padding: 24px 0;
  
}

.login .loginContainer .btnContainer p {
  margin: 14px 0 0 0;
  text-align: right;
  color: #fff;
  
}

.login .loginContainer .btnContainer p span {
  color: yellow;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-left: 5px;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  
}

.login .loginContainer .btnContainer p span:hover {
  color: #f0ebec;
}

.login .loginContainer .errorMsg {
  color: red;
  font-size: 16px;
}

.hero {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(
    ellipse at left bottom,
    rgba(34,139,34, 1) 0%,
    rgba(0,100,0, 0.9) 59%,
    rgba(124,252,0, 0.9) 100%
  );
}

.hero nav {
  background: rgba(0,100,0, 0.9);
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero nav h2 {
  color: #fff;
}

.hero nav button {
  width: 86px;
  padding: 8px 0;
  background: rgba(154,205,50, 0.9);
}

@media (max-width: 340px) {
  .login .loginContainer label {
  width: 200px;
  }
}

`