import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    confirmPassword,
    setConfirmPassword,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        {hasAccount ? (
         <>
         <label>Usuário</label>
         <input
           type="text"
           autoFocus
           require
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
         <p className="errorMsg">{emailError}</p>
         <label>Senha</label>
         <input
           type="password"
           require
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
         <label>Confirmar Senha</label>
         <input
           type="password"
           require
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
         />
         <p className="errorMsg">{passwordError}</p>
         </>
        ) : (
          <>
          <label>Usuário</label>
          <input
            type="text"
            autoFocus
            require
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Senha</label>
          <input
            type="password"
            require
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          </>
        )}
        <div className="btnContainer">
          {hasAccount ? (
           <>
           <button onClick={handleSignup} className="btn">Se inscreva</button>
           <p>Tem uma conta ? <span onClick={() => setHasAccount(!hasAccount)}>Entre</span></p>
         </>
          ) : (
            <>
            <button onClick={handleLogin} className="btn">Entre</button>
            <p> Não tem uma conta ? <span onClick={() => setHasAccount(!hasAccount)}>Se inscreva</span></p>
          </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
