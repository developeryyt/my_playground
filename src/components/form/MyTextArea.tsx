const MyTextArea = ({
    value,
    onChange,
    placeholder,
    className
}: {
    className: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
}) => {
    return (
        <textarea
            className={className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default MyTextArea;