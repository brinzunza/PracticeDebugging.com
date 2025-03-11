
import { Link } from "react-router-dom";

interface ProblemCardProps {
    key: number;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    passed: boolean;
    languages: string[];
}

const ProblemCard: React.FC<ProblemCardProps> = ({ key, name, difficulty, passed, languages}) => {

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
                <div>
                    {languages.map((item) => (
                        <Link to={`/problem/${key}`} key={key} className="ml-auto mx-[10] underline cursor-default hover:text-blue-500">{item}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProblemCard;