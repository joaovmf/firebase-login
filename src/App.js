import { AppWrap } from "./styledApp";
import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./components/Login";
import Hero from "./components/Hero";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  /* eslint-disable */
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError('E-mail inválido.');
            break;
          case "auth/wrong-password":
            setPasswordError('Senha inválida.');
            break;
        }
      });
  };

  const handleSignup = () => {
    if (password === confirmPassword) {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError('O e-mail já está em uso ou é inválido.');
            break;
          case "auth/weak-password":
            setPasswordError('O password deve ter no mínimo 6 caracteres.');
            break;
        }
      });
    } else {
      setPasswordError('As senhas devem ser iguais.')
  }
}
  

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <AppWrap>
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      )}
    </AppWrap>
  );
}

export default App;
