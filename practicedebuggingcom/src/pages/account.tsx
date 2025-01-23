import { useNavigate } from 'react-router-dom'

export default function Account() {
    const navigate = useNavigate();
    return (
        <div className="mx-[10%]">
            <p className="text-4xl">Account</p>
            <div className="flex gap-20 justify-center mt-[20%] text-3xl">
                <button className="underline hover:text-blue-500 cursor-default" onClick={() => navigate("/")}>Log Out</button>
                <button className="underline hover:text-red-500 cursor-default" onClick={() => navigate("/")}>Delete Account</button>
            </div>
            </div>
    );
}
