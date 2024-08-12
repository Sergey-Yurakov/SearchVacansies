// TODO: поправить импорт
// @ts-ignore
import cl from './Select.module.scss';

const Select = ({ defaultValue, options, label, value, setValue }) => {
    return (
        <div className={cl.select}>
            <div className={cl.select__label}>
                <label htmlFor="select">{label}</label>
            </div>
            <div className={cl.select__body}>
                <select
                    name="select"
                    className={cl.select__body__select}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                >
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
