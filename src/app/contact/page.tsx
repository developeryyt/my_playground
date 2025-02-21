import ContactForm from "@/components/ContactForm";
import Background1 from "@/components/icons/Background1";


const Page = () => {

    return (
        <div className='p-12'>
            <h3 className='text-4xl font-bold pb-8'>Get in touch</h3>
            <div className='text-[0]'>
                <div className='inline-block w-[70%] align-top'>
                    <ContactForm />
                </div>
                <div className='inline-block w-[30%] align-top text-right'>
                    <Background1 />
                </div>
            </div>
        </div>
    );
};

export default Page;