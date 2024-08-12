import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import cl from './VacanciesItem.module.scss';

const VacanciesItem = ({ id, employer, employment, area, name, textVacancies, companyLogo }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <section className="main__sections card" key={id} ref={ref}>
            {inView ? (
                <>
                    <div className="card__column-left">
                        <div className="card__icons">
                            {companyLogo && <img src={companyLogo} alt="Логотип компании" className="card__logo" />}
                        </div>
                        <div className="card__left-block">
                            <div className="card__left-text">
                                <span>Форма работы: </span>
                                {employment.name || 'Нет данных'}
                            </div>
                            <div className="card__left-text">
                                <span>Компания: </span>
                                {employer.name}
                            </div>
                            <div className="card__left-text">
                                <span>Город: </span>
                                {area.name}
                            </div>
                        </div>
                    </div>

                    <div className="card__column-right">
                        <h2 className="card__title">{name}</h2>
                        <div className="card__right-block">
                            <p className="card__right-text">{textVacancies}</p>
                            <div className="card__but-wrap">
                                <button className="card__button" onClick={() => setIsOpen(e => !e)}>
                                    {isOpen ? 'close' : 'more details'}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className={cl.vacanciesItem__skeleton}></div>
            )}
        </section>
    );
};

export default VacanciesItem;
