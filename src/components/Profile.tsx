import Image from "next/image";


const Profile = () => {

    return (
        <div className='rounded-2xl'>
            <Image
                src={'/image/my_profile.jpg'}
                alt='my handsome eprofile'
                width={40}
                height={40}
                className='rounded-[50%] border-[1px]'
            />
        </div>
    );
};

export default Profile;