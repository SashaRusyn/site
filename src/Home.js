import React from 'react';
import './styles/Main-Page-Styles.css';
import Header from './Header';
import Search_Header from './Search_Header';
import Footer from './Footer';
import Main_Part from './Main_Part';

const Home = () => {
    function sign() {
        window.location.href = "/Sign";
    }

    return (
        <div>
            <header className='header'>
                <Header />
                <button className="sign-button click" onClick={sign}>Увійти</button>
                <Search_Header />
            </header>
            <main>
                <Main_Part />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;