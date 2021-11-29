import Link from 'next/link'


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <h1>Navbar list</h1>
            </div>
            <a>Home</a>
            <Link href="/About" ><a>About</a></Link>
            <Link href="/Lists/Page" ><a>Test Pages</a></Link>
        </nav>
     );
}
 
export default Navbar;