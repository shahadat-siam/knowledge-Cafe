import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";
const Blog = ({blog,hundleAddToBookmsrk,hundleReadingTime }) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div>  
            <img className='w-full lg:h-[400px] mt-10' src={cover} alt="loding" />
            <div className='flex justify-between items-center mt-6 mb-3'>
                <div className='flex gap-x-6 '>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h2 className='lg:text-3xl text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='space-x-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => hundleAddToBookmsrk(blog)}><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='mt-2'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => hundleReadingTime(reading_time)} className='underline font-bold text-purple-700'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    Blog: PropTypes.object.isRequired
    // hundleAddToBookmsrk: PropTypes.func
}

export default Blog;