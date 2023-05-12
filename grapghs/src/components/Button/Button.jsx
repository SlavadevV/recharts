import s from './style.module.css';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={s.button}>
            {children}
        </button>
    );
}

export default Button;
