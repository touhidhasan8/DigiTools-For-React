import { Suspense } from 'react'
import './App.css'
import Loadings from './Components/Loading/Loadings'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import PlayGround from './Components/Banner/PlayGround'
import Card from './Components/Card/Card'

function App() {
  const loadData = fetch('/data.json').then(res => res.json())

  return (
    <div>
        <Suspense fallback={<Loadings/>}>
          <Navbar></Navbar>
          <Banner></Banner>
          <PlayGround></PlayGround>
          <Card loadData={loadData}></Card>
        </Suspense>
    </div>
  )
}

export default App
