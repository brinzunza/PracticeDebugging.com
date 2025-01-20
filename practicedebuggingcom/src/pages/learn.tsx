import LearnSection from "../components/learn_section";

export default function Learn() {
    return (
        <div className="p-8 m-[20] px-[400] cursor-default">
            <h1 className="text-6xl">
                Learn
            </h1>
            <LearnSection 
                type="Syntax" 
                description="Learn common syntax errors and how to debug them."
                languages={["Python", "Java"]}
            />
            <LearnSection
                type="Logic"
                description="Learn common logic errors and how to debug them."
                languages={["Python", "Java"]}
            />
            <LearnSection
                type="Runtime"
                description="Learn common runtime errors and how to debug them."
                languages={["Python", "Java"]}
            />
            <LearnSection
                type="Data Types"
                description="Learn common data type errors and how to debug them."
                languages={["Python", "Java", "C", "Javascript"]}
            />
            <LearnSection
                type="Input/Output"
                description="Learn common input/output errors and how to debug them."
                languages={["Python", "Java", "Javascript"]}
            />
        </div>
    );
}