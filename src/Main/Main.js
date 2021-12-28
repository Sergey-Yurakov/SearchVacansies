import './Main.css';

import React, {useEffect, useState} from "react";

function Main() {

    //This states
    const [data, setData] = useState([]);

    //This refs
    let refs = React.createRef();

    //Создал массив для рефов, чтобы потом его перебрать найти текущий
    let nameClass = [];

    useEffect(() => {
        fetch('https://api.hh.ru/vacancies?text=javascript')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(data => setData((data.items).slice(0,5)))
            .catch(error => {
                console.log("error", error);
            });
    }, []);

    const clickHandler = (e) => {
        //Ищем текущую кнопку по ключу и меняем текст внутри
        if(e.target.innerHTML === 'more details') {
            e.target.innerHTML = 'close';
        }
        else {
            e.target.innerHTML = 'more details';
        }

        //Проходим циклом по массиву с рефами и находим текущий по ключу
        nameClass.forEach(item => {
            if (e.target.dataset.key === item.dataset.text) {
                if (item.classList.contains('main__sections__text-right')) {
                    item.classList.remove('main__sections__text-right')
                    item.classList.add('main__sections__text-right_close');
                }
                else {
                    item.classList.remove('main__sections__text-right_close')
                    item.classList.add('main__sections__text-right');
                }
            }
            else {
                console.log(false)
            }

        })
    }

    return(
        <div className='main'>
            {
                data.map(item => {
                    return <div className='main__sections' key={item.id}>
                        <div className="main__sections__column-left">
                            <div className="main__sections__icons">
                                <img src={item.employer.logo_urls['240']} alt='Логотип компании' className='main__sections__logo'/>
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
                        </div>

                        <div className="main__sections__column-right">
                            <div className="main__sections__title">
                                {item.name}
                            </div>
                            <div className="main__sections__text-body">
                                <div className="main__sections__text-right" data-text = {item.id} ref={(refs) => {nameClass.push(refs)}}>
                                    {item.snippet.requirement}
                                    {item.snippet.responsibility}
                                </div>
                                <div className="main__sections__but-right">
                                    <button className='but-right__button' data-key={item.id} onClick={clickHandler}>more details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Main;