import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const errors = [
  "SyntaxError: Unexpected token",
  "ReferenceError: x is not defined",
  "TypeError: Cannot read properties of undefined",
  "404 Not Found",
  "500 Internal Server Error",
  "Segmentation Fault (core dumped)",
  "AssertionError: Expected true but got false",
  "IndexError: List index out of range"
];

export default function LandingPage() {
  const [title, setTitle] = useState("PracticeDebugging.com");
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTitle(errors[Math.floor(Math.random() * errors.length)]);
      setTimeout(() => {
        setTitle("PracticeDebugging.com");
        setGlitch(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center text-3xl cursor-default">
        <h1 className={`relative font-bold font-vt323 transition-all -mt-[175px] ${glitch ? "text-red-400 glitch" : "text-black"}`}>        {title}
        {glitch && (
          <>
            <span className="glitch-layer text-red-500 absolute top-0 left-0 opacity-50">{title}</span>
            <span className="glitch-layer text-orange-500 absolute top-0 left-0 opacity-50">{title}</span>
          </>
        )}
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
        
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        .font-vt323 {
          font-family: 'VT323', monospace;
        }

        @keyframes glitch {
          0% { transform: translate(0, 0); opacity: 1; }
          10% { transform: translate(-2px, 2px); opacity: 0.9; }
          20% { transform: translate(2px, -2px) skewX(10deg); opacity: 0.8; }
          30% { transform: translate(-5px, 5px) skewX(-10deg); opacity: 0.7; }
          40% { transform: translate(5px, -5px) skewX(10deg); opacity: 0.6; }
          50% { transform: translate(-2px, 2px); opacity: 0.9; }
          60% { transform: translate(2px, -2px); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        .glitch {
          animation: glitch 0.3s infinite;
          position: relative;
        }
        .glitch-layer {
          animation: glitch 0.3s infinite reverse;
        }
      `}</style>
    </div>
  );
}
