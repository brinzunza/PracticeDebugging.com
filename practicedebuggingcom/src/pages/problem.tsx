import ProblemDesc from "../components/problem_desc";

export default function Problem() {
    return (
        <div className="flex flex-col">
            <div>
                <ProblemDesc />
            </div>
            <div>
                Code Editor
            </div>
        </div>
    );
}