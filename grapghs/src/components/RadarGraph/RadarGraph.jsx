import { useEffect, useState } from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'

const dataStatic = [
    {
        "subject": "Governance and Control",
        "A": 10,
        "B": 60,
        "fullMark": 10
    },
    {
        "subject": "Operational driver",
        "A": 25,
        "B": 30,
        "fullMark": 30
    },
    {
        "subject": "Financial Planning & Analysis",
        "A": 35,
        "B": 60,
        "fullMark": 24
    },
    {
        "subject": "Strategic Bussines Partner",
        "A": 65,
        "B": 20,
        "fullMark": 58
    },
    {
        "subject": "Catalyst For Change",
        "A": 76,
        "B": 5,
        "fullMark": 86
    },
    {
        "subject": "Fundraising And M&A",
        "A": 39,
        "B": 10,
        "fullMark": 65
    },
    {
        "subject": "Leadership",
        "A": 5,
        "B": 68,
        "fullMark": 39
    },
    {
        "subject": "Commercial Mindset",
        "A": 10,
        "B": 53,
        "fullMark": 5
    },
    {
        "subject": "Soft Skills",
        "A": 39,
        "B": 75,
        "fullMark": 43
    }
]

const RadarGraph = ({ data }) => {
    const [transformedData, setTransformedData] = useState([])

    useEffect(() => {
        if (data.length) {
            const transformed = dataStatic.map((item, index) => {
                return {
                    subject: item.subject,
                    A: data[index].number,
                    B: data[index].number - 10
                }
            })
            setTransformedData(transformed);
        }
    }, [data])


    const labelFormatter = ({ x, y, payload }) => {

        return (
            <>
                <rect x={x - 8} y={y - 8} width="16" height="16 " fill={'#fff'} fillOpacity={0.4} />
                <text textAnchor="middle" fontSize={10} x={x} y={y}>{payload.value}</text>
            </>

        )
    }

    return (
        <RadarChart outerRadius={90} width={730} height={250} data={transformedData}>
            <PolarGrid stroke='#696b6b' />
            <PolarAngleAxis dataKey="subject" fontSize={11} />
            <PolarRadiusAxis angle={90} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tick={labelFormatter} />
            <Radar name="Lily" dataKey="B" strokeWidth={2} stroke="#225853" fill="#225853" fillOpacity={0.4} />
            <Radar name="Mike" dataKey="A" strokeWidth={2} stroke="#f7c677" fill="#f7c677" fillOpacity={0.4} />
        </RadarChart>
    )
}

export default RadarGraph
