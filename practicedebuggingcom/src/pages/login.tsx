export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh] text-3xl">
            <h1 className="cursor-default mb-8 text-6xl">Login</h1>
            <button 
                className="flex items-center gap-3 px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-default"
            >
                <img src="/google-icon.svg" alt="Google" className="w-6 h-6" />
                <span className="text-xl">Continue with Google</span>
            </button>
        </div>
    );
}