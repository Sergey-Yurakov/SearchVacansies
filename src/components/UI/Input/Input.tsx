// TODO: поправить импорт
// @ts-ignore
import cl from './Input.module.scss';

const Input = ({ label, placeholder, value, setValue }) => {
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
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Input;
