import { PieChart, Pie, Cell } from 'recharts'
import s from './style.module.css'
import { useEffect, useState } from 'react';

const COLORS = ['#C3A355', '#1E4D58', '#39836B', '#808080', '#D3DAD4', '#E5D9B4', '#D3E8D6', '#604653'];

const dataStatic = [
    {
        subject: "Governance and Control",
    },
    {
        subject: "Operational driver",
    },
    {
        subject: "Financial Planning & Analysis",
    },
    {
        subject: "Strategic Bussines Partner",
    },
    {
        subject: "Catalyst For Change",
    },
    {
        subject: "Fundraising And M&A",
    },
    {
        subject: "Leadership",
    },
    {
        subject: "Commercial Mindset",
    },
    {
        subject: "Soft Skills",
    }
]

const renderLegend = (data) => {

    return (
        <div className={s.legend} style={{ marginTop: '1.5rem' }}>
            {data.map((entry, index) => (
                <div className={s.legendItem} key={`legend-item-${index}`}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            backgroundColor: COLORS[index % COLORS.length],
                            marginRight: '5px',
                            borderRadius: '50%'
                        }}
                    ></span>
                    {dataStatic[index].subject} {'-'} {entry.value}
                </div>
            ))}
        </div>
    );
};

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            dominantBaseline="central"
            textAnchor={x > cx ? 'start' : 'end'}
            x={x > cx ? x + 15 : x - 15}
            y={y > cy ? y + 5 : y - 5}>
            {value}
        </text>
    )
}

const renderLabelLine = ({ cx, cy, midAngle, innerRadius, outerRadius, index, value }) => {
    const RADIAN = Math.PI / 180;
    const radiuss = innerRadius + (outerRadius - innerRadius) * 0.99;
    const xLine = cx + radiuss * Math.cos(-midAngle * RADIAN);
    const yLine = cy + radiuss * Math.sin(-midAngle * RADIAN);
    const lineWidth = value.toString().length + 1;

    return (
        <>
            <line x1={xLine} y1={yLine} x2={xLine} y2={yLine > cy ? yLine + 15 : yLine - 15} stroke={COLORS[index % COLORS.length]} />
            <line x1={xLine} y1={yLine > cx ? yLine + 15 : yLine - 15} x2={xLine > cx ? xLine + (lineWidth * 15) : xLine - (lineWidth * 15)} y2={yLine > cy ? yLine + 15 : yLine - 15} stroke={COLORS[index % COLORS.length]} />
        </>
    )
}

export const PieGraph = ({ data }) => {
    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
        setTransformedData(transformData(data))
    }, [data])

    const transformData = (data) => {
        return data.map(item => ({
            name: item.field.id,
            value: item.number,
        }));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <PieChart width={300} height={300}>
                <Pie
                    data={transformedData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    labelLine={renderLabelLine}
                    label={renderLabel}
                    outerRadius={100}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            {renderLegend(transformedData)}
        </div>
    )
}
