import s from './style.module.css'

const Wrapper = ({ children, style }) => {
    return (
        <div style={style} className={s.wrapper}>{children}</div>
    )
}

export default Wrapper
