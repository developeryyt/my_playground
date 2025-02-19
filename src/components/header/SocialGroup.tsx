import Instagram from "@/components/icons/Instagram";
import LinkedIn from "@/components/icons/LinkedIn";
import Link from "next/link";

const SocialGroup = () => {


    return (
        <div className='flex items-center gap-4'>
            <Link
                href='https://www.instagram.com/yet1009'
                target='_blank'
                className='inline-block align-middle'
            >
                <Instagram className='w-4'/>
            </Link>
            <Link
                href='https://www.linkedin.com/in/%EC%97%B0%ED%83%9C-%EC%9C%A0-4a4b92337/'
                className='inline-block align-middle'
                target='_blank'
            >
                <LinkedIn className='w-4'/>
            </Link>
        </div>
    );
};

export default SocialGroup;