import SocialGroup from "@/components/header/SocialGroup";
import TodayDates from "@/components/header/TodayDates";
import Nav from "@/layout/header/nav/Nav";

const Header = () => {

    return (
        <header className='header'>
            <div className='inner'>
                <div className='header__top bg-brandcolor pl-40 pr-40'>
                    <div className='flex justify-between items-center  min-h-12'>
                        <TodayDates />
                        <SocialGroup />
                    </div>
                </div>
                <div className='header__bottom'>
                    <div>
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;