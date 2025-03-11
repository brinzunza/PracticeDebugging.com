import LearnSection from "../components/learn_section";

const topics = [
    { id: 1, type: "Syntax", languages: ["Python", "Java"], title: "Syntax", description: "This is the learning section for Syntax, read about how it works and how to properly use it.", content: ["Content 1", "Content 2", "Content 3"]},
    { id: 1, type: "Logic", languages: ["Python", "Java"], title: "Logic", description: "This is the learning section for Logic, read about how it works and how to properly use it.", content: ["Content 1", "Content 2", "Content 3"]},
    { id: 1, type: "Math", languages: ["Javascript", "Java"], title: "Math", description: "This is the learning section for Math, read about how it works and how to properly use it.", content: ["Content 1", "Content 2", "Content 3"]},
    ]

export default function Learn() {
    return (
        <div className="p-8 m-[20] px-[400] cursor-default">
            <h1 className="text-6xl">
                Learn
            </h1>
            {topics.map((item) => (
                <LearnSection 
                key={item.id} 
                type={item.type} 
                languages={item.languages} 
                title={item.title} 
                description={item.description}
                content={item.content}
              />  
            ))}
        </div>
    );
}