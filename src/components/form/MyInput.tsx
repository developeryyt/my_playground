import {COMMONPROPS} from "@/types";

const MyInput = ({
    className,
    placeholder,
    value,
    type,
    onChange
}: {
    className: COMMONPROPS['className'],
    placeholder: string;
    value: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <input
            className={`ipt ${className}`}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onChange}
        />
    );
};

export default MyInput;