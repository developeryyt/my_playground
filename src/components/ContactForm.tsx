'use client';

import MyInput from "@/components/form/MyInput";
import MyTextArea from "@/components/form/MyTextArea";
import {useState} from "react";
import MyButton from "@/components/form/MyButton";

const ContactForm = () => {

    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [contents, setContents] = useState<string>('')

    const submitHandler = () => {

    }


    return (
        <div className=''>
            <div className='flex items-center gap-6 pb-5'>
                <div className='flex-1'>
                    <MyInput
                        className='pl-4 min-h-16 rounded-xl'
                        placeholder='Name*'
                        value={nameValue}
                        type='text'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameValue(e.target.value)}
                    />
                </div>
                <div className='flex-1'>
                    <MyInput
                        className='pl-4 min-h-16 rounded-xl'
                        placeholder='Email*'
                        value={emailValue}
                        type='email'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
                    />
                </div>
            </div>
            <div className='pb-8'>
                <MyTextArea
                    className='w-full rounded-xl p-4 min-h-[200px]'
                    value={contents}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContents(e.target.value)}
                    placeholder='Message'
                />
            </div>
            <div>
                <MyButton
                    text='Submit'
                    onClick={submitHandler}
                    type='button'
                    className='bg-grey900 text-white min-h-16 pl-8 pr-8 rounded-xl font-bold'
                />
            </div>
        </div>
    );
};

export default ContactForm;