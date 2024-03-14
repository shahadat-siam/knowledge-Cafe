 import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() { 


  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const hundleAddToBookmsrk = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const hundleReadingTime = time => {
    // const newTime = readingTime + time;
    // setReadingTime(newTime)
    // console.log(newTime)
    console.log('mark as read',time)
    const rightTime = parseInt(time)
    const nowReadingtime = parseInt(readingTime)
    setReadingTime(nowReadingtime+rightTime)
  }

  return (
    <> 
       <Header></Header>
        <div className='mx-20 md:flex md:space-x-10'>
        <Blogs hundleReadingTime ={hundleReadingTime } hundleAddToBookmsrk={hundleAddToBookmsrk}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
        </div>
    </>
  )
}

export default App
