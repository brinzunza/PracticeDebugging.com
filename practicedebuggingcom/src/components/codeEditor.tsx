import React, { useState } from 'react';

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState('');

    const handleSubmit = () => {
        alert(`Code Submitted!`);
    };

    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-80 bg-gray-800 text-green-400 font-mono p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                spellCheck={false}
            />
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Run Testers
            </button>
        </div>
    );
};

export default CodeEditor;