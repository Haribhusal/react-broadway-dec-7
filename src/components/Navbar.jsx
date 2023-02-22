

const Navbar = () => {

    const name = "Broadway"
    return (


        <header className="flex flex-col md:flex-row gap-5 justify-between px-5 items-center shadow-lg py-2">
            <div className="logo">
                <img src="https://picsum.photos/id/100/100/100" alt="" className="h-16 w-16" />
            </div>

            <nav className="flex gap-5 flex-col md:flex-row items-center">
                <a href={'/home'} className="text-blue-800 ">Home </a>
                <a href={'/home'}>About Us </a>
                <a href={'/home'}>Services </a>
                <a href={'/home'}>Blog </a>
                <a href={'/home'}>Gallery </a>
                <a href={'/home'} className="bg-purple-800 px-5 py-2 text-white rounded hover:bg-purple-200 hover:text-purple-700 hover:rounded-full transition duration-300 ease-in-out">Contact </a>
            </nav>

        </header>


    )
}


export default Navbar;


