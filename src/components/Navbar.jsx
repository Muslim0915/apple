import {Link} from "react-router-dom";
import {FaApple} from  'react-icons/fa'
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
export const Navbar = () => {
    return (
        <nav className='navbar h-[44px] bg-black'>
            <div className="container max-w-[1024px] h-full flex justify-between items-center">
                <ul className="navbar__menu  flex justify-between items-center gap-6">
                    <li className="menu__item"><Link className='text-white' to='/'><FaApple color={'white'}/></Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/store'>Store</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/mac'>Mac</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/ipad'>Ipad</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/iphone'>Iphone</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/watch'>Watch</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/vision'>Vision</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/airpods'>AirPods</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/tv-home'>Tv & Home</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/entertainment'>Entertainment</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/accessories'>Accessories</Link></li>
                    <li className="menu__item"><Link className='text-white text-xs' to='/support'>Support</Link></li>
                    <li className="menu__item"><a href="#"><CiSearch className='text-white ' /></a> </li>
                    <li className="menu__item"><a href="#"><IoBagOutline className='text-white ' /></a> </li>
                </ul>
            </div>
        </nav>
    )
}