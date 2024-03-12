import {Link} from "react-router-dom";
import {FaApple} from  'react-icons/fa'
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import links from "../repositories/links.js";
export const Navbar = () => {
    return (
        <nav className='navbar h-[44px] bg-black'>
            <div className="container max-w-[1024px] h-full flex justify-between items-center">
                <ul className="navbar__menu  flex justify-between items-center gap-6">
                    <li className="menu__item"><Link className='text-white' to='/'><FaApple color={'white'}/></Link></li>
                    {links.map((link) => {
                        return (
                            <li className="menu__item" key={link.id}><Link className='text-white text-xs' to={link.url}>{link.name}</Link></li>
                        )
                    })}
                    <li className="menu__item"><a href="#"><CiSearch className='text-white ' /></a> </li>
                    <li className="menu__item"><a href="#"><IoBagOutline className='text-white ' /></a> </li>
                </ul>
            </div>
        </nav>
    )
}