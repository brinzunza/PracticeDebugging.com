import { useNavigate } from 'react-router-dom'

interface LearnSectionProps {
    type: string;
    description: string;
    languages: string[];
}

export default function LearnSection({ type, description, languages }: LearnSectionProps) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col p-6 bg-gray-300 cursor-default my-[20]">
            <h2 className="text-2xl font-semibold">{type}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="flex gap-3 flex-wrap">
                {languages.map((language, index) => (
                    <button 
                        key={index}
                        className="underline cursor-default hover:text-blue-500"
                        onClick={() => navigate(`/learn`)}
                    >
                        {language}
                    </button>
                ))}
            </div>
        </div>
    );
}