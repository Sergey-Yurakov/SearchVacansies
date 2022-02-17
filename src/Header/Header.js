import './Header.scss';

function Header() {

    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">
                    List of vacancies
                </h1>
                <div className="header__body">
                    <div className="header__select">
                        <div className="header__select-title">
                            <label htmlFor="select">Form</label>
                        </div>
                        <div className="header__select-body">
                            <select name="select" className="text-grey select__select">
                                <option>Not selected</option>
                                <option>Full time</option>
                                <option>Half time</option>
                                <option>Part time</option>
                            </select>
                        </div>
                    </div>
                    <div className="header__input">
                        <div className="header__input-title">
                            <label htmlFor="input">Position</label>
                        </div>
                        <div className="header__input-body">
                            <input name="input" placeholder="Unspecified" className="text-grey input__input"/>
                        </div>
                    </div>
                    <div className="header__sort">
                        <div className="header__sort-text text-grey">Clear sorting &times;</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

