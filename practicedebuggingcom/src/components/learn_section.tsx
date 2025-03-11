import React from "react";
import { Link, useNavigate } from 'react-router-dom'

interface LearnSectionProps {
    key: number;
    type: string;
    languages: string[];
    title: string;
    description: string;
    content: string[];
}

export default function LearnSection({ key, type, description, languages, title, content }: LearnSectionProps) {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col p-6 bg-gray-300 cursor-default my-[20]">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="my-[10]">
                {languages.map((item) => (
                    <Link to={`/information/`} key={key} className="ml-auto mx-[10] underline cursor-default hover:text-blue-500">{item}</Link> // /information/${key}
                ))}
            </div>
        </div>
    );
}