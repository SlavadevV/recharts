import { Cell, PolarAngleAxis, RadialBar, RadialBarChart, Tooltip } from "recharts"
import s from './style.module.css'
import { COLORS } from '../../constants/constants'

const data = [
    {
        name: "Working",
        uv: 40,
        fill: "#8884d8"
    },
    {
        name: "Non-working",
        uv: 60,
        fill: "#83a6ed"
    },
]

const renderCustomizedLabel = ({ cx, cy, value, index }) => {

    return (
        <text
            x={index === 0 ? cx : 15 + cx / 2}
            y={index === 0 ? cy : 15 + cy / 2}
            fill={COLORS[index]}
            textAnchor={index === 0 ? 'middle' : 'end'}
            dominantBaseline="central"
        >
            %{value}
        </text>
    );
};

const renderLegend = () => {

    return (
        <div className={s.legendWrapper}>
            {data.map((entry, index) => (
                <div className={s.legendItem} key={entry.name} style={{ color: COLORS[index] }}>
                    {entry.name}
                    <span style={{ background: COLORS[index] }} className={s.legendMarker} />
                </div>
            ))}
        </div>
    )
}

export const RadialGraph = () => {
    return (
        <div>
            <RadialBarChart
                barCategoryGap={5}
                width={250}
                height={250}
                innerRadius="30%"
                outerRadius="65%"
                data={data}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                <RadialBar
                    label={renderCustomizedLabel}
                    // label={{ fill: '#666', position: 'inside' }}
                    background
                    cornerRadius={10}
                    clockWise={true}
                    dataKey='uv'>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </RadialBar>
                <Tooltip />
            </RadialBarChart>
            {renderLegend()}
        </div>
    )
}
