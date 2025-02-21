import {COMMONPROPS} from "@/types";

const MyButton = ({
    text,
    onClick,
    type,
    className
} : {
    text: string;
    onClick: () => void;
    type: 'button' | 'submit' | 'reset';
    className: COMMONPROPS['className']
}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >{text}</button>
    );
};

export default MyButton;