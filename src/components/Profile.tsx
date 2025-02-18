import Image from "next/image";


const Profile = () => {

    return (
        <div>
            <Image
                src={'/image/my_profile.jpg'}
                alt='my handsome eprofile'
                width={40}
                height={40}
            />
        </div>
    );
};

export default Profile;