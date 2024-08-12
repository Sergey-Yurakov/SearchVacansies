import { ChangeEvent, useEffect, useState } from 'react';

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
export const Header = () => {
    const [workSchedule, setWorkSchedule] = useState(localStorage.getItem('select') || 'fullDay');
    const [position, setPosition] = useState(localStorage.getItem('input') || 'js');

    useEffect(() => {
        if (position) {
            localStorage.setItem('input', position);
        }

        if (workSchedule) {
            localStorage.setItem('select', workSchedule);
        }
    }, [position, workSchedule]);

    const resetFilter = () => {
        setWorkSchedule('fullDay');
        setPosition('');
    };

    const handleChangePosition = (event: ChangeEvent<HTMLInputElement>) => {
        setPosition(event.target.value);
    };

    const handleChangeWorkSchedule = (event: ChangeEvent<HTMLSelectElement>) => {
        setWorkSchedule(event.target.value);
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
                        value={workSchedule}
                        onChange={handleChangeWorkSchedule}
                    />
                    <Input
                        label="Position"
                        placeholder="Unspecified"
                        value={position}
                        onChange={handleChangePosition}
                    />

                    <div className="header__sort">
                        <button className="header__sort-text" onClick={resetFilter}>
                            Clear sorting <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
