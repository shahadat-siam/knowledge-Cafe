import Bookmark from "../Bookmark/Bookmark";

 
const Bookmarks = ({bookmarks,readingTime}) => {  
    return (
        <div className="md:w-1/3 mt-10">
            <div>
                <h3 className="font-bold text-3xl">Reading time : {readingTime}</h3>
            </div>
            <h3 className="font-bold text-4xl mt-12">Bookmarks {bookmarks.length}</h3>
             <div className="mt-8 space-y-4"> 
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
             </div>
        </div>
    );
};

export default Bookmarks;