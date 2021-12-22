import React, {useState} from 'react';
import './Header.css';

function Header() {

    //This states
    const [state, setState] = useState('Not selected');

    //This refs
    let selectToogleClass = React.createRef(),
        arrow = React.createRef(),
        spanTextValue = React.createRef(),
        bodyTextValue = React.createRef();


    const clickHandler = (e) => {
        //Получаем HTML-коллекцию детей и добавляем их в массив для перебора
        let array = [...bodyTextValue.current.children];
        
        //Перебираем массив и находим кнопку, по которой кликнули
        for (let i = 0; i < array.length; i++) {
            if (array[i].dataset.text === e.target.innerText) {
                console.log(array[i]);
                setState(array[i].dataset.text)
            }
        }
        

        //Открываем/закрываем выпадающий список
        if(!selectToogleClass.current.classList.contains('is-active')) {
            selectToogleClass.current.classList.add('is-active');
            
        }
        else {
            selectToogleClass.current.classList.remove('is-active');
        }
        
    }

    return(
        <div>
            <h1>List of vacancies</h1>
           <div className='header-container'>

                {/* Кастомный select */}
               <div className='header-container__select' ref={selectToogleClass} onClick={clickHandler}>
                    <p>Form</p>
                    <div className='header-container__select__header' >
                            <span className='header-container__select__header__current' ref={spanTextValue}>{state}</span>
                        <div className='header-container__select__header__icon' ref={arrow}>
                            <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0L0.473721 9L19.5263 9L10 0Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div className='header-container__select__body' ref={bodyTextValue} >
                        <div className='header-container__select__body__item' data-text = 'Full time'>Full time</div>
                        <div className='header-container__select__body__item' data-text = 'Half time'>Half time</div>
                        <div className='header-container__select__body__item' data-text = 'Part time'>Part time</div>
                    </div>
               </div>

               <div className='header-container__input'>
                    <p><label htmlFor="input">Position</label></p>
                   <p>
                        <input type='text' placeholder='Unspecified' name='input'/>
                   </p>
               </div>

               <div className='header-container__clearSort'>
                   <p>Clear sorting
                       <span>&times;</span>
                   </p>
               </div>

           </div>
        </div>
    );
}

export default Header;