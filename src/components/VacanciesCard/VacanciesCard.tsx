// TODO: добавить потом картинку
// import NoImage from '../../images/noimage.png;
import VacanciesItem from '../VacanciesItem/VacanciesItem';

const VacanciesCard = ({ data }) => {
    return (
        <>
            {data?.pages?.map(i =>
                i?.items.map(({ id, employer, employment, area, name, snippet }) => {
                    const textVacancies = `${snippet.requirement} ${snippet.responsibility}`.replace('undefined', '');

                    return (
                        <div key={id}>
                            <VacanciesItem
                                id={id}
                                employer={employer}
                                companyLogo={employer?.logo_urls?.['240'] || 'No Image'}
                                employment={employment}
                                area={area}
                                name={name}
                                textVacancies={textVacancies}
                            />
                        </div>
                    );
                })
            )}
        </>
    );
};

export default VacanciesCard;
