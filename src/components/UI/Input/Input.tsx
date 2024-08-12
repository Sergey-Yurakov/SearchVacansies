import { ChangeEvent } from 'react';

import cl from './Input.module.scss';

type InputProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, placeholder, value, onChange }: InputProps) => {
    return (
        <div className={cl.input}>
            <div className={cl.input__label}>
                <label htmlFor="input">{label}</label>
            </div>
            <div className={cl.input__body}>
                <input
                    name="input"
                    placeholder={placeholder}
                    className={cl.input__body__input}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default Input;
