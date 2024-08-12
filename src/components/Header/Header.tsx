import { useEffect, useState } from 'react';

import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import './Header.scss';

const optionsSelect = [
    {
        value: 'fullDay',
        label: 'FullDay',
    },
    {
        value: 'shift',
        label: 'Shift',
    },
    {
        value: 'flexible',
        label: 'Flexible',
    },
    {
        value: 'remote',
        label: 'Remote',
    },
];

// todo: переписать потом селект и инпут через стейты, а не через локалСторадж!
function Header() {
    const [select, setSelect] = useState(localStorage.getItem('select') || 'fullDay');
    const [input, setInput] = useState(localStorage.getItem('input') || 'js');

    useEffect(() => {
        if (input) {
            localStorage.setItem('input', input);
        }

        if (select) {
            localStorage.setItem('select', select);
        }
    }, [input, select]);

    const resetFilter = () => {
        setSelect('fullDay');
        setInput('');
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">List of vacancies</h1>
                <div className="header__body">
                    <Select
                        label="Form"
                        defaultValue="Sort by"
                        options={optionsSelect}
                        value={select}
                        setValue={setSelect}
                    />
                    <Input label="Position" placeholder="Unspecified" value={input} setValue={setInput} />

                    <div className="header__sort">
                        <button className="header__sort-text" onClick={resetFilter}>
                            Clear sorting <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
