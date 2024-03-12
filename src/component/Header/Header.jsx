import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between mx-10 py-4 items-center border-b-2'>
            <h1 className='text-5xl font-bold '>Knowlage cafe</h1> 
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;