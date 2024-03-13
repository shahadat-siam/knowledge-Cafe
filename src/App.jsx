 import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() { 


  const [bookmarks, setBookmarks] = useState([])

  const hundleAddToBookmsrk = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <> 
       <Header></Header>
        <div className='mx-20 md:flex md:space-x-10'>
        <Blogs hundleAddToBookmsrk={hundleAddToBookmsrk}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
    </>
  )
}

export default App
