import ProblemCard from "../components/problem_card";
import React from "react"
import { Link } from "react-router-dom";

export default function Practice() {

    const items = [
        { id: 1, name: "Syntax", difficulty: "Easy" as const, passed: false, languages: ["Python", "Java"], title: "Syntax Issue", description: "This is a syntax problem, try and find what is wrong with it", hints: ["Look at for loop", "The answer is the colon"]},
        { id: 2, name: "Different", difficulty: "Hard" as const, passed: true, languages: ["Python", "Java"], title: "Different Syntax", description: "This is a syntax problem, try and find what is wrong with it", hints: ["Look at for loop", "The answer is the colon"]},
        { id: 3, name: "Same", difficulty: "Medium" as const, passed: false, languages: ["Python", "Java"], title: "Same Syntax", description: "This is a syntax problem, try and find what is wrong with it", hints: ["Look at for loop", "The answer is the colon"]},
    ]

    return (
        <div className="mx-[200]">
            <h1 className="text-5xl">Dashboard</h1>
            <div className="flex justify-between my-[20]">
                <div className="bg-gray-300 px-[80] py-[70] relative">
                    <p className="absolute top-4 left-4 text-2xl">Progress</p>
                    <div className="flex flex-col items-center gap-4 h-full justify-center">
                        <div className="relative h-[30px] w-[400px] bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className="absolute left-0 h-full bg-black rounded-full transition-all duration-500"
                                style={{ width: '71%' }}
                            />
                        </div>
                        <p className="text-5xl font-bold">71%</p>
                    </div>
                </div>
                <div className="bg-gray-300 px-[190] py-[100] relative">
                    <p className="absolute top-4 left-4 text-2xl">Current Streak</p>
                    <div className="flex justify-center items-center h-full">
                        <p className="text-5xl font-bold">7 Days</p>
                    </div>
                </div>
            </div>
            <div>
                {items.map((item) => (
                    <ProblemCard 
                        key={item.id} 
                        name={item.name} 
                        difficulty={item.difficulty} 
                        passed={item.passed} 
                        languages={item.languages} 
                    />
                ))}
            </div>
        </div>
    );
}
