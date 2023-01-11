import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
function RegisterPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({name,email,password}) =>{
      dispatch(asyncRegisterUser({ name, email, password }));    
      navigate("/");
  }
 
  return (
    <section className='register-page'>
      <h2>Register</h2>
      <RegisterInput register={onRegister} />
      <p>Kembali ke <Link to="/">Login</Link></p>
    </section>
  )
}
 
export default RegisterPage;