import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

 
const Blogs = ({hundleAddToBookmsrk}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h2>Blogs {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} hundleAddToBookmsrk={hundleAddToBookmsrk} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;