import Bookmark from "../Bookmark/Bookmark";

 
const Bookmarks = ({bookmarks}) => { 
    return (
        <div className="md:w-1/3">
            <h3>Bookmarks {bookmarks.length}</h3>
             <div className="mt-8 space-y-4"> 
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
             </div>
        </div>
    );
};

export default Bookmarks;