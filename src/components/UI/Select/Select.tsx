import { ChangeEvent } from 'react';

import cl from './Select.module.scss';

export type OptionsSelect = {
    label: string;
    value: string;
};

type SelectProps = {
    defaultValue: string;
    options: OptionsSelect[];
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ defaultValue, options, label, value, onChange }: SelectProps) => {
    return (
        <div className={cl.select}>
            <div className={cl.select__label}>
                <label htmlFor="select">{label}</label>
            </div>
            <div className={cl.select__body}>
                <select name="select" className={cl.select__body__select} value={value} onChange={onChange}>
                    <option value="" disabled>
                        {defaultValue}
                    </option>
                    {options.map(option => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;
