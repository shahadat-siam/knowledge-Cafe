 import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() { 


  const [bookmarks, setBookmarks] = useState([])

  const hundleAddToBookmsrk = blog => {
    console.log('bookmarks adding soon')
  }

  return (
    <> 
       <Header></Header>
        <div className='mx-20 md:flex md:space-x-10'>
        <Blogs hundleAddToBookmsrk={hundleAddToBookmsrk}></Blogs>
        <Bookmarks></Bookmarks>
        </div>
    </>
  )
}

export default App
