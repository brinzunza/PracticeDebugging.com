interface ProblemDescProps {
    name: String;
    description: String;
    difficulty: String;
    hints: String[];
}

export default function ProblemDesc ({name, description, difficulty, hints}: ProblemDescProps) {
    return (
        <div className="m-[5%]">
            <div className="text-2xl">{name}</div>
            <div className="mt-[5%]">{description}</div>
            <div className="flex justify-center">
                <button className=" m-[5%] underline hover:text-blue-500 cursor-default align-center">Submit</button>
            </div>
        </div>
    );
}