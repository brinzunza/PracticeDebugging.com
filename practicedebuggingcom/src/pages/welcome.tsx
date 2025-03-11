"use client";

import { Link } from "react-router-dom";

const Welcome: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[90vh] -mt-10 text-3xl cursor-default">
            <div className="flex flex-col items-center gap-16">
                <div>
                    <div className="flex gap-2">
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_forwards]">Stop</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_0.1s_forwards]">coding</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_0.3s_forwards]">copiable</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_0.5s_forwards]">algorithms.</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_0.7s_forwards]">Start</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_0.9s_forwards]">mastering</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_1.1s_forwards]">the</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_1.3s_forwards]">art</span>
                        <span className="opacity-0 animate-[slideUp_0.5s_ease-out_1.5s_forwards]">of</span>
                        <p className="flex text-blue-500 opacity-0 animate-[slideUp_0.5s_ease-out_1.7s_forwards]">debugging.</p>
                    </div>
                </div>
                <div className="flex justify-between w-full text-xl">
                    <Link className="opacity-0 underline decoration-[1.5px] cursor-default hover:text-blue-500 animate-[slideUp_1.0s_ease-out_2.7s_forwards]" to={`/about`}>
                        About
                    </Link>
                    <Link className="opacity-0 underline decoration-[1.5px] cursor-default hover:text-blue-500 animate-[slideUp_1.0s_ease-out_3.2s_forwards]" to={`/learn`}>Learn</Link>
                    <Link className="opacity-0 underline decoration-[1.5px] cursor-default hover:text-blue-500 animate-[slideUp_1.0s_ease-out_3.7s_forwards]" to={`/practice`}>Practice</Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;