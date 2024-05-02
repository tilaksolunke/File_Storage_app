import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    // JavaScript effect for card hover
    const handleCardHover = (e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
    };

    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-500 min-h-screen">
            <div className="container mx-auto py-8 flex justify-center items-center">
                <div className="max-w-xl">
                <h1 className="text-4xl font-bold text-purple-700 transform hover:scale-105 transition-transform duration-300 shadow-md">About Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-container">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold" style={{ color: '#000000' }}>Our Mission</h2>
                            <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
                            Our mission is to deliver exceptional customer service and support, fostering trust and efficiency in every interaction. We use IPFS for decentralized file storage and sharing, employing encryption for robust data security. This ensures confidentiality and reliability in our services, aligning with our commitment to exceeding client expectations.                            </p>
                            <h2 className="text-xl font-semibold" style={{ color: '#000000' }}>Team Members</h2>
                            <ul className="list-disc pl-6">
                                <li style={{ color: '#000000' }}> Tilak Solunke 1 - Role</li>
                                <li style={{ color: '#000000' }}>Sidhesh Marne 2 - Role</li>
                                <li style={{ color: '#000000' }}>Soham Padke 3 - Role</li>
                                <li style={{ color: '#000000' }}>Om Surase 3 - Role</li>

                                {/* Add more team members as needed */}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold" style={{ color: '#000000' }}>Our Vision</h2>
                        <p className="text-gray-700" style={{ lineHeight: '1.6' }}>
                        Our vision is to transform data storage and security by utilizing IPFS for decentralized storage and encryption for enhanced privacy. We aim to empower users with robust data protection mechanisms, ensuring that their information remains secure, private, and accessible only to authorized parties.
                        </p>
                    </div>
                    {/* Add more sections like Achievements, Testimonials, Contact Information, etc. */}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
