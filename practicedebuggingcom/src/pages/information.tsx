interface InformationProps {
    title: String,
    description: String,
    code: String
}

export default function Information({ title, description, code}: InformationProps) {
    return(
        <div className="m-[10%]">
            <div className="text-3xl">{title}</div>
            <div>{description}</div>
            <div>{code}</div>
        </div>
    );
}