// // pages/contact.tsx

// import React, { useState } from 'react';

// const ContactPage: React.FC = () => {
//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg">
//                     <h2 className="text-xl font-semibold mb-4">Email</h2>
//                     <p className="text-lg">
//                         <a href="mailto:tilak.solunke21@vit.edu" className="text-blue-500 hover:underline">tilak.solunke21@vit.edu</a><br />
//                         <a href="mailto:sidhesh.marne21@vit.edu" className="text-blue-500 hover:underline">sidhesh.marne21@vit.edu</a><br />
//                         <a href="mailto:soham.phadke21@vit.edu" className="text-blue-500 hover:underline">soham.phadke21@vit.edu</a><br />
//                         <a href="mailto:om.surase21@vit.edu" className="text-blue-500 hover:underline">om.surase21@vit.edu</a><br />
//                     </p>
//                 </div>
//                 <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-lg">
//                     <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
//                     <p className="text-lg">
//                         +91 9423662368<br />
//                         +91 XXXXXXXXXX<br />
//                         +91 XXXXXXXXXX<br />
//                         +91 XXXXXXXXXX<br />
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;
// pages/contact.tsx

// pages/contact.tsx

import React, { useState } from 'react';

import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto py-8">
                    <h1 className="text-4xl font-bold text-purple-700 transform hover:scale-105 transition-transform duration-300 shadow-md text-center">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center bg-purple-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Email</h2>
                    <div className="flex flex-col gap-2">
                        <ContactItem icon={<HiOutlineMail />} text="tilak.solunke21@vit.edu" href="mailto:tilak.solunke21@vit.edu" />
                        <ContactItem icon={<HiOutlineMail />} text="sidhesh.marne21@vit.edu" href="mailto:sidhesh.marne21@vit.edu" />
                        <ContactItem icon={<HiOutlineMail />} text="soham.phadke21@vit.edu" href="mailto:soham.phadke21@vit.edu" />
                        <ContactItem icon={<HiOutlineMail />} text="om.surase21@vit.edu" href="mailto:om.surase21@vit.edu" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-purple-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
                    <div className="flex flex-col gap-2">
                        <ContactItem icon={<HiOutlinePhone />} text="+91 9423662368" href="tel:+919423662368" />
                        <ContactItem icon={<HiOutlinePhone />} text="+91 XXXXXXXXXX" href="tel:+91XXXXXXXXXX" />
                        <ContactItem icon={<HiOutlinePhone />} text="+91 XXXXXXXXXX" href="tel:+91XXXXXXXXXX" />
                        <ContactItem icon={<HiOutlinePhone />} text="+91 XXXXXXXXXX" href="tel:+91XXXXXXXXXX" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; href: string }> = ({ icon, text, href }) => {
    return (
        <a href={href} className="flex items-center hover:text-blue-500">
            <span className="mr-2">{icon}</span>
            <span>{text}</span>
        </a>
    );
};

export default ContactPage;
