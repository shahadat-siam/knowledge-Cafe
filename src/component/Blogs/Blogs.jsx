import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
 
const Blogs = ({hundleAddToBookmsrk,hundleReadingTime }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3 mt-10">
            <h2 className="font-bold text-4xl">Blogs {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} hundleReadingTime ={hundleReadingTime} hundleAddToBookmsrk={hundleAddToBookmsrk} blog={blog}></Blog>)
            }
        </div>
    );
};


// Blogs.propTypes = {
//     hundleAddToBookmsrk: PropTypes.func
// }

export default Blogs;