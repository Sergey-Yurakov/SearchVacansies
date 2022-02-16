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
                if (item.classList.contains('main__right-text')) {
                    item.classList.remove('main__right-text')
                    item.classList.add('main__right-text--close');
                }
                else {
                    item.classList.remove('main__right-text--close')
                    item.classList.add('main__right-text');
                }
            }
            else {
                console.log(false)
            }

        })
    }

    return (
        <div className="wrap-main">
            <main className='main'>
                {
                    data.map(item => {
                        return <article className='main__sections card' key={item.id}>
                            <div className="main__column-left">
                                <div className="main__icons">
                                    <img src={item.employer.logo_urls['240']} alt='Логотип компании' className='main__logo' />
                                </div>
                                <div className="main__left-block">
                                    <div className='main__left-text'>
                                        <span>Форма работы: </span>
                                        {item.schedule.name}
                                    </div>
                                    <div className='main__left-text'>
                                        <span>Компания: </span>
                                        {item.employer.name}
                                    </div>
                                    <div className='main__left-text'>
                                        <span>Город: </span>
                                        {item.area.name}
                                    </div>
                                </div>
                            </div>

                            <div className="main__column-right">
                                <h2 className="main__right-title">
                                    {item.name}
                                </h2>
                                <div className="main__right-block">
                                    <p className="main__right-text" data-text={item.id} ref={(refs) => { nameClass.push(refs) }}>
                                        {item.snippet.requirement}
                                        {item.snippet.responsibility}
                                    </p>
                                    <div className="main__but-wrap">
                                        <button className='main__button' data-key={item.id} onClick={clickHandler}>more details</button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    })
                }
            </main>
        </div>
    );
}

export default Main;