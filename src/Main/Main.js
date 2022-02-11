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
                if (item.classList.contains('main__sections_text-right')) {
                    item.classList.remove('main__sections_text-right')
                    item.classList.add('main__sections_text-right_close');
                }
                else {
                    item.classList.remove('main__sections_text-right_close')
                    item.classList.add('main__sections_text-right');
                }
            }
            else {
                console.log(false)
            }

        })
    }

    return (
        <main className='main'>
            {
                data.map(item => {
                    return <article className='main__sections' key={item.id}>
                        <section className="main__sections__column-left">
                            <div className="main__sections__icons">
                                <img src={item.employer.logo_urls['240']} alt='Логотип компании' className='main__sections__logo' />
                            </div>
                            <div className="main__sections__text-left">
                                <div className='text-left_margin-top'>
                                    <span className='text-left_gray'>Форма работы: </span>
                                    {item.schedule.name}
                                </div>
                                <div className='text-left_margin-top'>
                                    <span className='text-left_gray'>Компания: </span>
                                    {item.employer.name}
                                </div>
                                <div className='text-left_margin-top'>
                                    <span className='text-left_gray'>Город: </span>
                                    {item.area.name}
                                </div>
                            </div>
                        </section>

                        <section className="main__sections__column-right">
                            <h2 className="main__sections-title">
                                {item.name}
                            </h2>
                            <div className="main__sections__text-body">
                                <p className="main__sections_text-right" data-text={item.id} ref={(refs) => { nameClass.push(refs) }}>
                                    {item.snippet.requirement}
                                    {item.snippet.responsibility}
                                </p>
                                <div className="main__sections__but-right">
                                    <button className='but-right__button' data-key={item.id} onClick={clickHandler}>more details</button>
                                </div>
                            </div>
                        </section>
                    </article>
                })
            }
        </main>
    );
}

export default Main;