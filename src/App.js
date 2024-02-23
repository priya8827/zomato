import React from 'react'
   import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Addrestorent from './Addrestorent'
import Veiwfood from './Veiwfood'

function App() {
  return (
    <div> 
        {/* <Home/> */}
<Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/addres' element={<Addrestorent/>}/>
          <Route path='/veiw' element={<Veiwfood/>}/>

          </Routes>
    </div>
  )
}

export default App
