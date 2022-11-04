import React from 'react';
import './styles/Main-Page-Styles.css';
import example from './images/example-card-image.png';

const Main_Part = () => {
    let position = 0;
    let width = 480;
    let count = 3;

    function prev() {
        let list = document.querySelector('ul');
        position += width * count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };

    function next() {
        let list = document.querySelector('ul');
        let listElems = document.querySelectorAll('li');
        position -= width * count;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };

    return (
        <div>
            <div className="main-first">
                <div className="main-first-text-container">
                    <h1 className="main-first-text">Останні
                        актуальні пропозиції</h1>
                </div>
                <div className="carousel" id="carousels">
                    <img className="prev-button prev click" onClick={prev}></img>
                    <div className="gallery">
                        <ul>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li className="click">
                                <div>
                                    <img className="card" src={example}></img>
                                    <div className="price">
                                        <h1>450$/міс.</h1>
                                    </div>
                                    <p className="card-text">Ужогород<br></br>вул.
                                        Швабська,29
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="click" onclick="sign()">More</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img className="next-button next click" onClick={next}></img>
                </div>
            </div>
            <div className="main-second">
                <div class="main-img"></div>
                <p class="main-second-text">Вже близько 5 років ми допомагаємо людям
                    знайти/продати житло по вигідних умовах
                    <p class="main-second-first-text"><strong>10000+</strong><br></br>пропозицій доступно<br></br>зараз</p>
                    <p class="main-second-first-text"><strong>7000+</strong><br></br>відвідувачів нашого<br></br>сервісу кожного дня</p>
                    <p class="main-second-second-text"><strong>12000+</strong><br></br>людей скористалися<br></br>нашим сервісом</p>
                    <p class="main-second-second-text"><strong>25670</strong><br></br>резюме-пропозицій<br></br>було створено</p>
                    <div class="main-img-people"></div>
                </p>
            </div>
        </div>
    );
}

export default Main_Part;