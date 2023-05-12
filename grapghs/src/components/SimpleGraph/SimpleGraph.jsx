import { useEffect, useState } from 'react';
import s from './style.module.css'
import Women from '../../svg/women.svg'
import Man from '../../svg/man.svg'

const data = [{
    name: 'Man',
    value: 30,
},
{
    name: 'Woman',
    value: 70,
}]

const COLORS = ['#C3A355', '#1E4D58', '#39836B', '#808080', '#D3DAD4', '#E5D9B4', '#D3E8D6', '#604653'];

const ICONS = [Women, Man]

const renderLegend = () => {
    return (
        <div className={s.legendWrapper}>
            {data.map((entry, index) => (
                <div key={entry.name} className={s.legend}>
                    <div className={s.legendIcon}>
                        <img src={ICONS[index]} alt="" />
                    </div>
                    <span style={{ color: COLORS[index] }}>
                        <span className={s.legendValue}>{entry.name}</span>
                        <br />
                        {entry.value}%
                    </span>
                </div>
            ))}
        </div>
    )
}

const SimpleGraph = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div>
            {data.map((entry, index) => (
                <div key={entry.name} className={s.barWrapper}>
                    <div
                        style={{
                            backgroundColor: COLORS[index % COLORS.length],
                            width: !isMounted ? 0 : `${entry.value}%`
                        }}
                        className={s.bar}>
                    </div>
                </div>
            ))}
            {renderLegend()}
        </div>
    )
}

export default SimpleGraph
