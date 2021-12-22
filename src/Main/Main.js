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
                if (item.classList.contains('main-container__section__right__text')) {
                        item.classList.remove('main-container__section__right__text')
                        item.classList.add('main-container__section__text__close');
                }
                else {
                        item.classList.remove('main-container__section__text__close')
                        item.classList.add('main-container__section__right__text');
                }
            }
            else {
                console.log(false)
            }
              
        })
    }


    return(
        <div className='main-container'>
           {
            data.map( item => {
                    return <div className='main-container__section' key={item.id}>

                        <div className='main-container__section__left'>
                            <div>
                                <p className='main-container__section__left__img'>
                                    <img src={item.employer.logo_urls['240']} alt='Логотип компании'/>
                                </p>
                            </div>
                            <div className='main-container__section__left__text'>
                                <p>
                                    <span>Форма работы: </span>
                                    {item.schedule.name}
                                </p>
                                <p>
                                    <span>Компания: </span>
                                    {item.employer.name}
                                </p>
                                <p>
                                    <span>Город: </span>
                                    {item.area.name}
                                </p>
                            </div>
                        </div>

                        <div className='main-container__section__right'>
                            <div>
                                <h2>{item.name}</h2>
                            </div>
                            <div>
                            <p className='main-container__section__right__text' data-text = {item.id} ref={(refs) => {nameClass.push(refs)}}>
                                {item.snippet.requirement}
                                {item.snippet.responsibility}
                            </p>
                            <p className='main-container__section__right__butt'>
                                <button data-key={item.id} onClick={clickHandler}>more details</button>
                            </p>
                            </div>
                        </div>
                    </div>

                })}
               
        </div>
    );
}

export default Main;