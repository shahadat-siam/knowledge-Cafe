 import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() { 

  return (
    <> 
       <Header></Header>
        <div className='mx-10 md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
        </div>
    </>
  )
}

export default App