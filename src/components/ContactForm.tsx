import MyInput from "@/components/form/MyInput";
import MyTextArea from "@/components/form/MyTextArea";

const ContactForm = () => {
    return (
        <div>
            <div className='flex items-center gap-6'>
                <div>
                    <MyInput />
                </div>
                <div>
                    <MyInput />
                </div>
            </div>
            <div>
                <MyTextArea />
            </div>
        </div>
    );
};

export default ContactForm;