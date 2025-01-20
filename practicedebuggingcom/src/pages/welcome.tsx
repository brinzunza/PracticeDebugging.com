export default function Welcome() {
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
                    <button className="opacity-0 underline decoration-[1.5px] cursor-default hover:text-blue-500 animate-[slideUp_1.0s_ease-out_4.7s_forwards]">About</button>
                    <button className="opacity-0 underline decoration-[1.5px] cursor-default hover:text-blue-500 animate-[slideUp_1.0s_ease-out_5.2s_forwards]">Learn</button>
                    <button className="opacity-0 underline decoration-[1.5px] cursor-default hover:text-blue-500 animate-[slideUp_1.0s_ease-out_5.7s_forwards]">Practice</button>
                </div>
            </div>
        </div>
    );
}