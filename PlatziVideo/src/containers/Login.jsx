import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.name,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    /**
     * history no pemite movernos hacia donde sea
     * necesario según nuestro comportamiento de la app.
     *
     * History lo obtenemos de las props, el cual esta
     * disponible ya que estamos encapsulando toda la app
     * en BrowserRouter el cual es el encargado de manejar
     * todo el flujo de la ruta y todo el flujo de la app
     */
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>
            Iniciar sesión
          </button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='logo de google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='logo de twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
