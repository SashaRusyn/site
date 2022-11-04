import React from 'react';
import './styles/Sign-Page-Styles.css';

const Registration_Container = () => {
    return (
        <div>
            <div className="registration-container">
                <h1 className="registration-text">Реєстрація</h1>
                <p className="registration-text-second">Вже є акаунт? <a className='href-register'
                    href="/Sign">Увійти</a></p>

                <form>
                    <h2 className="form-text form-h2-1">Email</h2>
                    <input className="input-data input-email" type="email" name="email" id="email"></input>
                    <h2 className="form-text form-h2-2">Пароль</h2>
                    <input className="input-data input-password" type="password" name="password" id="password"
                        pattern="^[a-zA-Z0-9_.-]*$"></input>
                    <button className="submit-data" type="submit">
                        <p className='button-sign'>Далі</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registration_Container;