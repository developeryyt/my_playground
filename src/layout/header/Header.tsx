import SocialGroup from "@/components/header/SocialGroup";
import TodayDates from "@/components/header/TodayDates";
import Nav from "@/layout/header/nav/Nav";
import Profile from "@/components/Profile";
import Menu from "@/components/nav/Menu";

const Header = () => {

    return (

        <header className='header'>
            <div className='inner'>
                <div className='header__top bg-brandcolor2 pl-40 pr-40'>
                    <div className='flex justify-between items-center min-h-12'>
                        <TodayDates/>
                        <SocialGroup/>
                    </div>
                </div>
                <div className='header__bottom'>
                    <div className='pl-10 pr-10 border-b-[1px] border-[rgba(0,0,0,0.08)]'>
                        <div className='flex justify-between items-center pt-8 pb-8'>
                            <Nav />
                            <div className='flex items-center gap-5'>
                                <Profile />
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;