import Image from 'next/image'
import logo from './logo.png'

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return(
        <>
        <nav>
        <div className="flex justify-between px-10 py-7">
            <div className="flex items-center gap-2 select-none">
                <Image src={logo} alt="logo" width={20} height={20} />
                <Link className="cursor-default" to={"/"}>PracticeDebugging</Link>
            </div>
            <div className="flex gap-8">
                <Link className="underline hover:text-blue-500 cursor-default" to={"/practice"}>Practice</Link>
                <Link className="underline hover:text-blue-500 cursor-default" to={"/learn"}>Learn</Link>
                <Link className="underline hover:text-blue-500 cursor-default" to={"/account"}>Account</Link>
            </div>
        </div>
        </nav>
        </>
    );
};

export default Header;