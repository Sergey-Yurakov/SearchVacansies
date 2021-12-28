import './Header.css';

function Header() {

    return(
        <div className='header'>
            <div className="header__title">
                List of vacancies
            </div>
            <div className="header__body">
                <div className="header__select">
                    <div className='header__select__title'>
                        <label htmlFor='select' className='text'>Form</label>
                    </div>
                    <div className="header__select__body">
                        <select name='select' className='input text text_grey header__select__select'>
                            <option>Not selected</option>
                            <option>Full time</option>
                            <option>Half time</option>
                            <option>Part time</option>
                        </select>
                    </div>
                </div>
                <div className="header__input">
                    <div className='header__input__title'>
                        <label htmlFor='input' className='text'>Position</label>
                    </div>
                    <div className="header__input__body">
                        <input name='input' placeholder='Unspecified' className='input text text_grey header__input__input'/>
                    </div>
                </div>
                <div className="header__sort">
                    <div className="header__sort__text text text_grey">Clear sorting &times;</div>
                </div>
            </div>
        </div>
    );
}

export default Header;

