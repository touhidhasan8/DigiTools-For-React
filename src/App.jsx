import { Suspense, useState } from 'react'
import './App.css'
import Loadings from './Components/Loading/Loadings'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import PlayGround from './Components/Banner/PlayGround'
import Card from './Components/Card/Card'
import { ToastContainer } from 'react-toastify'
import ThreeSteep from './Components/ThreeStep/ThreeSteep'

function App() {
  const loadData = fetch('/data.json').then(res => res.json())
const [selectCard , setSelectCard]=useState([])
  return (
    <div>
        <Suspense fallback={<Loadings/>}>
          <Navbar selectCard={selectCard} ></Navbar>
          <Banner></Banner>
          <PlayGround></PlayGround>
          <Card loadData={loadData} selectCard={selectCard} setSelectCard={setSelectCard} ></Card>
          <ThreeSteep></ThreeSteep>
        </Suspense>
         <ToastContainer />

    </div>
  )
}

export default App
