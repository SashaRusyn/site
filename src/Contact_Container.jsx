import React from 'react';
import './styles/Contact-Page-Styles.css';

const Contact_Container = () => {
    function sendEmail() {

    }

    return (
        <div>
            <div className="contact-container">
                <form>
                    <h1 className="contact-text">Залиште нам своє повідомлення</h1>
                    <input className="input1" type="text" placeholder="Ваше ім'я"></input>
                    <input className="input2" type="email" placeholder="Поштова скринька"></input>
                    <input className="input2" type="text" placeholder="Номер телефону"></input>
                    <textarea className="textarea" type="text" placeholder="Як ми можемо вам допомогти?"></textarea>
                    <button className='submit-data-contact' type="submit" onSubmit={sendEmail}>
                        <p className='button-text'>Надіслати</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact_Container;