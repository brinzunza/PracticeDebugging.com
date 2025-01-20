interface ProblemCardProps {
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    passed: boolean;
    languages: string[];
}

export default function ProblemCard({ name, difficulty, passed, languages }: ProblemCardProps) {
    const difficultyColor = {
        Easy: 'text-green-500',
        Medium: 'text-orange-500',
        Hard: 'text-red-500'
    }[difficulty];

    return (
        <div className="flex flex-col p-6 bg-gray-300 cursor-default my-[20]">
            <div className="flex items-center justify-between">
                <div className="flex gap-8 items-center">
                    <span className="text-xl">{name}</span>
                    <span className={`${difficultyColor}`}>{difficulty}</span>
                    {passed && <span className="text-green-500">Passed</span>}
                </div>
                <div className="flex gap-3">
                    {languages.map((language, index) => (
                        <button 
                            key={index}
                            className="underline cursor-default hover:text-blue-500"
                        >
                            {language}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}