import './Header.scss';

function Header() {

    return (
        <div className="wrap-header">
            <header className="header">
                <h1 className="header__title">
                    List of vacancies
                </h1>
                <div className="body">
                    <div className="select">
                        <div className="select__title">
                            <label htmlFor="select">Form</label>
                        </div>
                        <div className="select__body">
                            <select name="select" className="inputs text-grey">
                                <option>Not selected</option>
                                <option>Full time</option>
                                <option>Half time</option>
                                <option>Part time</option>
                            </select>
                        </div>
                    </div>
                    <div className="input">
                        <div className="input__title">
                            <label htmlFor="input">Position</label>
                        </div>
                        <div className="input__body">
                            <input name="input" placeholder="Unspecified" className="inputs text-grey" />
                        </div>
                    </div>
                    <div className="sort">
                        <div className="sort__text text-grey">Clear sorting &times;</div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;

