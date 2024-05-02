import { SignOutButton } from "@clerk/clerk-react";
import { useUser } from '@clerk/clerk-react';

const NewNav = () => {

    const user=useUser();

    return (

        <nav className="navbar flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-pink-400 text-white shadow-md">
            <div className="logo text-xl font-bold">
            <p>File Storage</p>
            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">{user.user.fullName}</a></li>
            </ul>

            <img src={user.user.imageUrl} style={{height:'50px', width:'50px' ,borderRadius:'50%', marginLeft:'-20px'}} alt="NoUser.."/>

            <SignOutButton className='but2' />

        </nav>
    );

};

export default NewNav;