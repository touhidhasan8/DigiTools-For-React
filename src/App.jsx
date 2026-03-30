import { Suspense } from 'react'
import './App.css'
import Loadings from './Components/Loading/Loadings'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'

function App() {
  const loadData = fetch('/data.json').then(res => res.json())

  return (
    <div>
        <Suspense fallback={<Loadings/>}>
          <Navbar></Navbar>
          <Banner loadData={loadData}></Banner>
        </Suspense>
    </div>
  )
}

export default App
