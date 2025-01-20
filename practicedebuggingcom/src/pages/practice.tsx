import ProblemCard from "../components/problem_card";

export default function Practice() {
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
                <ProblemCard 
                    name="Infinite Recursion" 
                    difficulty="Easy"
                    passed={true}
                    languages={["Java", "Python"]}
                />
                <ProblemCard 
                    name="API Misuse" 
                    difficulty="Hard"
                    passed={false}
                    languages={["Java", "Python"]}
                />
                <ProblemCard 
                    name="Infinite Recursion" 
                    difficulty="Easy"
                    passed={true}
                    languages={["Java", "Python"]}
                />
                <ProblemCard 
                    name="API Misuse" 
                    difficulty="Hard"
                    passed={false}
                    languages={["Java", "Python"]}
                />
                <ProblemCard 
                    name="Infinite Recursion" 
                    difficulty="Easy"
                    passed={true}
                    languages={["Java", "Python"]}
                />
                <ProblemCard 
                    name="API Misuse" 
                    difficulty="Hard"
                    passed={false}
                    languages={["Java", "Python"]}
                />
            </div>
        </div>
    );
}