// import { SignUpButton } from "@clerk/clerk-react";

// const Navbar = () => {
//     return (
//         <nav className="navbar flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
//             <div className="logo text-xl font-bold">
//                 File Storage
//             </div>

//             <ul className="nav-links flex gap-4">
//                 <li><a href="#" className="hover:text-blue-500">Home</a></li>
//                 <li><a href="#" className="hover:text-blue-500">About</a></li>
//                 <li><a href="#" className="hover:text-blue-500">Services</a></li>
//                 <li><a href="#" className="hover:text-blue-500">Contact</a></li>
//             </ul>

//             <SignUpButton className="but2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" />
//         </nav>
//     );
// };

// export default Navbar;
import { SignUpButton } from "@clerk/clerk-react";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-500 to-pink-400 text-white shadow-md">
            {/* Update the bg-gradient-to-r class with your desired gradient colors */}
            <div className="logo text-xl font-bold">
                File Storage    
            </div>

            <ul className="nav-links flex gap-4">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="/about" className="hover:text-blue-500">About</a></li>
                <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            </ul>

            <SignUpButton className="but2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" />
        </nav>
    );
};

export default Navbar;
