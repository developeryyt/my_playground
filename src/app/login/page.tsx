import Lock from "@/components/icons/Lock";
import LoginForm from "@/components/LoginForm";

const Page = () => {
    return (
        <div className='h-full'>
            <div className='h-full flex'>
                <div className='flex-1 flex items-center bg-brandcolor2'>
                    <dl className='flex flex-1 flex-col items-center'>
                        <dt className='text-center'>
                            <span className='block'>
                                <Lock/>
                            </span>
                            <strong className='font-semibold text-5xl'>Welcome Back!</strong>
                        </dt>
                        <dd>For Authorized Person Only</dd>
                    </dl>
                </div>
                <div className='flex-1 flex items-center px-10'>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Page;