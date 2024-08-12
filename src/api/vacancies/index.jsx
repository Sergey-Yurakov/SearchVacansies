import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

const getData = async (pageParam, text = 'javascript', shedule = 'fullDay') => {
    const res = await axios.get(`https://api.hh.ru/vacancies?text=${text}&page=${pageParam}&shedule=${shedule}`);
    return res.data;
};

export const useVacanciesData = (text, shedule) => {
    return useInfiniteQuery({
        queryKey: ['vacancies', text, shedule],
        queryFn: ({ pageParam = 1 }) => getData(pageParam, text, shedule),
        keepPreviousData: true,
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.page < lastPage.pages) {
                return pages.length + 1;
            }

            return undefined;
        },
    });
};
