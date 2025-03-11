interface InformationProps {
    title: String,
    description: String,
    code: String
}

export default function Information({ title='Syntax', description='This is an explanation for how to deal with syntax issues in python', code='for i in loop'}: InformationProps) {
    return(
        <div className="mx-[10%] mt-[2%]">
            <div className="text-5xl">{title}</div>
            <div className="flex m-[5%] gap-10">
                <div className="flex-1 border p-[2%] h-[400px]">{description}</div>
                <div className="flex-1 my-[2%] border p-[2%] bg-gray-300">{code}</div>
            </div>
        </div>
    );
}