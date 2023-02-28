import { Link } from 'react-router-dom'

const Navbar = () => {

    const name = "Broadway"
    return (


        <header className="flex flex-col md:flex-row gap-5 justify-between px-5 items-center shadow-lg py-2">
            <div className="logo">
                <img src="https://picsum.photos/id/100/100/100" alt="" className="h-16 w-16" />
            </div>

            <nav className="flex gap-5 flex-col md:flex-row items-center">
                <Link to={`/home`}>Home</Link>
                <Link to={`/about-us`}>About Us</Link>
                <Link to={`/services`}>Services</Link>
                <Link to={`/blog`}>Blog</Link>
                <Link to={`/gallery`}>Gallery</Link>
                <Link to={`/contact`} className="bg-purple-800 px-5 py-2 text-white rounded hover:bg-purple-200 hover:text-purple-700 hover:rounded-full transition duration-300 ease-in-out">Contact</Link>
            </nav>

        </header>


    )
}


export default Navbar;


