// TODO: поправить конфиг и убрать игнор
// @ts-ignore
import cl from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <div className={cl.loader__content}></div>
        </div>
    );
};

export default Loader;
