import ProblemDesc from "../components/problem_desc";

export default function Problem() {
    return (
        <div className="flex w-full h-screen gap-5 mb-[5%]">
            <div className="w-2/3 border ml-[5%] bg-gray-200">
                <div className="bg-gray-200 h-full p-[5%]">
                    <div className="bg-black h-full w-full">
                        <p className="text-white">Code Editor</p>
                    </div>
                </div>
            </div>
            <div className="w-1/3 border mr-[5%] bg-gray-200">
                <ProblemDesc name='Problem 1' description="This is a syntax issue. Try to use your skills to solve this problem. Refer to the syntax learning page if stuck. Remember that in a real situation you will not be able to always see test cases." difficulty="Hard" hints={['What are the syntax components of a for loop']}/>
            </div>
        </div>
    );
}