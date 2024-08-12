import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useVacanciesData } from '../../api/vacancies';
import Loader from '../Loader/Loader';
import VacanciesCard from '../VacanciesCard/VacanciesCard';
import './Main.scss';

export const Main = () => {
    // const { data, fetchNextPage, hasNextPage, isSuccess, isLoading, error, isFetching } = useVacanciesData({
    //     schedule: localStorage.getItem('select'),
    //     textUrl: localStorage.getItem('input'),
    // });
    // const [search, setSearch] = useState({
    //     input: localStorage.getItem('input'),
    //     select: localStorage.getItem('select'),
    // });
    const { data, fetchNextPage, hasNextPage, isSuccess, isLoading, error, isFetching } = useVacanciesData(
        localStorage.getItem('input'),
        localStorage.getItem('select')
    );
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage();
    }, [fetchNextPage, hasNextPage, inView]);

    console.log('data', data);
    console.log('isSuccess', isSuccess);

    return (
        <main className="main">
            <div className="container">
                <div className="main__card">
                    {isLoading && <Loader />}
                    {isSuccess && (
                        <>
                            <VacanciesCard data={data} />
                            <div className="main__skeleton" ref={ref} />
                            {isFetching && <Loader />}
                        </>
                    )}
                    {error && <h2>Error</h2>}
                </div>
            </div>
        </main>
    );
};
