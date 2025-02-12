import SocialGroup from "@/components/header/SocialGroup";
import TodayDates from "@/components/header/TodayDates";

const Header = () => {

    return (
        <header className='header'>
            <div className='inner'>
                <div className='header__top flex justify-between items-center bg-brandcolor'>
                    <TodayDates />
                    <SocialGroup />
                </div>
                <div className='header__bottom'>
                </div>
            </div>
        </header>
    );
};

export default Header;