import Image from 'next/image'
import logo from './logo.png'

import { useNavigate } from 'react-router-dom'

export default function header() {
    const navigate = useNavigate();
    return(
        <>
        <div className="flex justify-between px-10 py-7">
            <div className="flex items-center gap-2 select-none">
                <Image src={logo} alt="logo" width={20} height={20} />
                <button className="cursor-default" onClick={() => navigate("/")}>PracticeDebugging</button>
            </div>
            <div className="flex gap-8">
                <button className="underline hover:text-blue-500 cursor-default" onClick={() => navigate("/practice")}>Practice</button>
                <button className="underline hover:text-blue-500 cursor-default" onClick={() => navigate("/learn")}>Learn</button>
                <button className="underline hover:text-blue-500 cursor-default" onClick={() => navigate("/account")}>Account</button>
            </div>
        </div>
        </>
    )
}