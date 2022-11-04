import React from 'react';
import './styles/Sign-Page-Styles.css';

const Sign_Container = () => {
    return (
        <div>
            <div className="registration-container">
                <h1 className="registration-text">Увійти</h1>
                <p className="registration-text-second">Не зареєстровані? <a className='href-register'
                    href="/Registration"> Зареєструватися</a></p>

                <form>
                    <h2 className="form-text form-h2-1">Email</h2>
                    <input className="input-data input-email" type="email" name="email" id="email"></input>
                    <h2 className="form-text form-h2-2">Пароль</h2>
                    <input className="input-data input-password" type="password" name="password" id="password"
                        pattern="^[a-zA-Z0-9_.-]*$"></input>
                    <a className="form-text form-h2-3" href="/">Забули пароль?</a>
                    <button className="submit-data" type="submit">
                        <p className='button-sign'>Увійти</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Sign_Container;