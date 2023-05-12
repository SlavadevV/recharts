import './App.css'
import SimpleGraph from './components/SimpleGraph/SimpleGraph'
import Container from './components/Container/Container'
import { PieGraph } from './components/PieGraph/PieGraph'
import { RadialGraph } from './components/RadialGraph/RadialGraph'
import Wrapper from './components/Wrapper/Wrapper'
import BarGraph from './components/BarGraph/BarGraph'
import TypeForm from './components/TypeForm/TypeForm'
import RadarGraph from './components/RadarGraph/RadarGraph'
import Button from './components/Button/Button'
import { printDocument } from './PDF'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <TypeForm setData={setData} />
      <div id='my-component'>
        <Container flex={true}>
          <Wrapper style={{ gridColumn: '1/2' }}>
            <PieGraph data={data} />
          </Wrapper >
          <Wrapper style={{ gridColumn: '2/4' }}>
            <SimpleGraph />
          </Wrapper >
          <Wrapper style={{ gridColumn: '4/5' }}>
            <RadialGraph />
          </Wrapper>
          <Wrapper style={{ gridColumn: '1/5' }}>
            <BarGraph />
          </Wrapper>
          <Wrapper style={{ gridColumn: '1/5' }}>
            <RadarGraph data={data} />
          </Wrapper>
        </Container>
      </div>
      <Button onClick={printDocument}>Save to PDF</Button>
    </>
  )
}

export default App
