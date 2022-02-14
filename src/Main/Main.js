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
                if (item.classList.contains('right-block__text')) {
                    item.classList.remove('right-block__text')
                    item.classList.add('right-block__text_close');
                }
                else {
                    item.classList.remove('right-block__text_close')
                    item.classList.add('right-block__text');
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
                        return <article className='main__sections' key={item.id}>
                            <section className="column-left">
                                <div className="left__icons">
                                    <img src={item.employer.logo_urls['240']} alt='Логотип компании' className='left__logo' />
                                </div>
                                <div className="left-block">
                                    <div className='left-block__text'>
                                        <span>Форма работы: </span>
                                        {item.schedule.name}
                                    </div>
                                    <div className='left-block__text'>
                                        <span>Компания: </span>
                                        {item.employer.name}
                                    </div>
                                    <div className='left-block__text'>
                                        <span>Город: </span>
                                        {item.area.name}
                                    </div>
                                </div>
                            </section>

                            <section className="column-right">
                                <h2 className="column-right__title">
                                    {item.name}
                                </h2>
                                <div className="right-block">
                                    <p className="right-block__text" data-text={item.id} ref={(refs) => { nameClass.push(refs) }}>
                                        {item.snippet.requirement}
                                        {item.snippet.responsibility}
                                    </p>
                                    <div className="but-wrap">
                                        <button className='but-wrap__button' data-key={item.id} onClick={clickHandler}>more details</button>
                                    </div>
                                </div>
                            </section>
                        </article>
                    })
                }
            </main>
        </div>
    );
}

export default Main;