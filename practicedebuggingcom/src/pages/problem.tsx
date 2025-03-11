import { useParams } from 'react-router-dom';
import ProblemDesc from "../components/problem_desc"
import CodeEditor from '../components/codeEditor';

export default function Problem() {
    const { id } = useParams();
    
    const problemData = {
        id: parseInt(id || "0"),
        name: "Syntax Issue",
        title: "Syntax Issue",
        difficulty: "Easy",
        description: "This is a syntax problem",
        hints: ["Look at the code", "Check syntax"]
    };

    return (
        <div className="flex w-full h-screen gap-5 mb-[5%]">
            <div className="w-2/3 border ml-[5%] bg-gray-200">
                <div className="bg-gray-200 h-full p-[5%]">
                    <div className="bg-black h-full w-full">
                        <CodeEditor />
                    </div>
                </div>
            </div>
            <div className="w-1/3 border mr-[5%] bg-gray-200">
                <ProblemDesc {...problemData} />
            </div>
        </div>
    );
}