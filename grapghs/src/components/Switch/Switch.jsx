import s from './style.module.css';

const Switch = ({ setState, boolean }) => {

    const handleChange = () => {
        setState(!boolean);
    };

    return (
        <label className={s.switch}>
            <input type="checkbox" checked={boolean} onChange={handleChange} />
            <span className={`${s.slider} ${s.round}`} />
        </label>
    );
};

export default Switch;
