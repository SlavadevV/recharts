import s from './style.module.css'

const Container = ({ children, flex }) => {
    return (
        <div className={`${s.container}${flex ? ` ${s.flex}` : ''}`}>{children}</div>
    )
}

export default Container
