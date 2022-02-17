import './Main.scss';

import React, { useEffect, useState } from "react";

function Main() {

    //This states
    const [data, setData] = useState([]);

    //This refs
    let refs = React.createRef();

    //Создал массив для рефов, чтобы потом его перебрать и найти текущий
    let nameClass = [];

    useEffect(() => {
        fetch('https://api.hh.ru/vacancies?text=javascript')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(data => setData((data.items).slice(0, 5)))
            .catch(error => {
                console.log("error", error);
            });
    }, []);

    const clickHandler = (e) => {
        //Ищем текущую кнопку по ключу и меняем текст внутри
        if (e.target.innerHTML === 'more details') {
            e.target.innerHTML = 'close';
        }
        else {
            e.target.innerHTML = 'more details';
        }

        //Проходим циклом по массиву с рефами и находим текущий по ключу
        nameClass.forEach(item => {
            if (e.target.dataset.key === item.dataset.text) {
                if (item.classList.contains('card__right-text')) {
                    item.classList.remove('card__right-text')
                    item.classList.add('card__right-text--close');
                }
                else {
                    item.classList.remove('card__right-text--close')
                    item.classList.add('card__right-text');
                }
            }
            else {
                console.log(false)
            }

        })
    }

    return (
        <main className="main">
            <div className='container'>
                {
                    data.map(item => {
                        return <article className='main__sections card' key={item.id}>
                            <div className="card__column-left">
                                <div className="card__icons">
                                    <img src={item.employer.logo_urls['240']} alt='Логотип компании' className='card__logo' />
                                </div>
                                <div className="card__left-block">
                                    <div className='card__left-text'>
                                        <span>Форма работы: </span>
                                        {item.schedule.name}
                                    </div>
                                    <div className='card__left-text'>
                                        <span>Компания: </span>
                                        {item.employer.name}
                                    </div>
                                    <div className='card__left-text'>
                                        <span>Город: </span>
                                        {item.area.name}
                                    </div>
                                </div>
                            </div>

                            <div className="card__column-right">
                                <h2 className="card__title">
                                    {item.name}
                                </h2>
                                <div className="card__right-block">
                                    <p className="card__right-text" data-text={item.id} ref={(refs) => { nameClass.push(refs) }}>
                                        {item.snippet.requirement}
                                        {item.snippet.responsibility}
                                    </p>
                                    <div className="card__but-wrap">
                                        <button className='card__button' data-key={item.id} onClick={clickHandler}>more details</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    })
                }
            </div>
        </main>
    );
}

export default Main;