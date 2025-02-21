import {COMMONPROPS} from "@/types";

const MyTextArea = ({
    value,
    onChange,
    placeholder,
    className
}: {
    className: COMMONPROPS['className'];
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