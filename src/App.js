import React, { useState } from 'react'
import News from './componets/News'
import Navbar from './componets/Navbar'
import { Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  
  const [progress,setProgress]=useState(0)
  
  
    return (

      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Routes>
        < Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={6} country='in' category='sports' color='secondary'/>}/>
        < Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={6} country='in' category='general' color='warning text-dark'/>}/>
        < Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={6} country='in' category='entertainment' color='primary'/>}/>
        < Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={6} country='in' category='science' color='success'/>}/>
        < Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={6} country='in' category='technology' color='danger'/>}/>
        < Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={6} country='in' category='health' color='info text-dark'/>}/>
        < Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={6} country='in' category='business' color='dark'/>}/>
        </Routes>
      </div>
    )
  
}

export default App
