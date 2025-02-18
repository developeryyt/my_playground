import Instagram from "@/components/icons/Instagram";
import LinkedIn from "@/components/icons/LinkedIn";

const SocialGroup = () => {


    return (
        <div className='flex items-center gap-4'>
            <Instagram className={'w-4'} />
            <LinkedIn className={'w-4'} />
        </div>
    );
};

export default SocialGroup;