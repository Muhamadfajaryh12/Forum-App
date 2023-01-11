import React from 'react';
import PropTypes from 'prop-types';
import useInput from "../hooks/useInput";
function LoginInput ({login}) {
 const [email,onEmailChangeHandler] = useInput("");
 const [password,onPasswordChangeHandler] = useInput("");
    return (
      <form className='login-input'>
        <input type="email" placeholder='Email' value={email} onChange={onEmailChangeHandler} />
        <input type="password" placeholder='Password' value={password} onChange={onPasswordChangeHandler} />
        <button type="button" onClick={() => login({ email, password })}>Masuk</button>
      </form>
    );
}
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;