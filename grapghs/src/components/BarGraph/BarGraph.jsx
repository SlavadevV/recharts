import { Bar, BarChart, CartesianGrid, Customized, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import s from './style.module.css'
import { COLORS } from '../../constants/constants'
import { useState } from 'react'
import Switch from '../Switch/Switch'

const data = [
    {
        "name": "Test 1",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Test 2",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Test 3",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Test 4",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Test 5",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Test 6",
        "uv": 2390,
        "pv": 0
    },
    {
        "name": "Test 7",
        "uv": 3490,
        "pv": 0
    },
    {
        "name": "Test 8",
        "uv": 3490,
        "pv": 0
    },
    {
        "name": "Test 9",
        "uv": 3490,
        "pv": 0
    },
    {
        "name": "Test 10",
        "uv": 3490,
        "pv": 0
    },
    {
        "name": "Test 11",
        "uv": 3490,
        "pv": 0
    },
    {
        "name": "Test 12",
        "uv": 3490,
        "pv": 0
    }
]

const data2 = [
    {
        "name": "Test 1",
        "uv": 500,
        "pv": 20
    },
    {
        "name": "Test 2",
        "uv": 1332,
        "pv": 523
    },
    {
        "name": "Test 3",
        "uv": 522,
        "pv": 455
    },
    {
        "name": "Test 4",
        "uv": 112,
        "pv": 600
    },
    {
        "name": "Test 5",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Test 6",
        "uv": 2390,
        "pv": 0
    },
]

const renderLabel = ({ x, y, payload }) => {
    return (
        <text
            fontSize={11}
            fill='#53AA8A'
            dominantBaseline="central"
            textAnchor="middle"
            x={x}
            y={y + 20}
        >
            {payload.value}
        </text>
    )
}

const renderLine = () => {

    return (
        <line x1="9%" y1="240" x2="99.35%" y2="240" stroke="#c4a458" />
    )
}

const formatNumber = (number) => {
    if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'k';
    }
    return number;
}


const BarGraph = () => {
    const [switched, setSwitched] = useState(false);

    return (
        <div>
            <Switch setState={setSwitched} boolean={switched} />
            <BarChart width={730} height={260} data={switched ? data : data2} barSize={10} >
                <CartesianGrid strokeDasharray="0" vertical={false} />
                <XAxis dataKey="name" tick={renderLabel} tickLine={false} stroke='#E5E5E5' />
                <YAxis stroke='#c4a458' tickLine={false} axisLine={false} tickFormatter={formatNumber} />
                {/* <Tooltip /> */}


                <Customized component={renderLine} />

                <Bar dataKey="pv" fill='#d03b3b' radius={10} />
                <Bar dataKey="uv" fill={COLORS[2]} radius={10} />
            </BarChart>
        </div>
    )
}

export default BarGraph
