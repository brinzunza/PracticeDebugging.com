import Image from 'next/image'
import logo from './logo.png'

export default function header() {
    return(
        <>
        <div className="flex justify-between px-10 py-7">
            <div className="flex items-center gap-2 select-none">
                <Image src={logo} alt="logo" width={20} height={20} />
                PracticeDebugging
            </div>
            <div className="flex gap-8">
                <button className="underline hover:text-blue-500 cursor-default">Practice</button>
                <button className="underline hover:text-blue-500 cursor-default">Learn</button>
                <button className="underline hover:text-blue-500 cursor-default">Account</button>
            </div>
        </div>
        </>
    )
}