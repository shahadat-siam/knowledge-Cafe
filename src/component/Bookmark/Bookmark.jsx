 
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="p-5 bg-slate-200 rounded-lg">
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;