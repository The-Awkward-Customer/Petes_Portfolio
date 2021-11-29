import Link from 'next/link'


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <h1>Navbar list</h1>
            </div>
            <a>Home</a>
            <Link href="/about" ><a>About</a></Link>
            <Link href="/lists/page" ><a>Test Pages</a></Link>
        </nav>
     );
}
 
export default Navbar;