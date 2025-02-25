import BG404 from "@/components/icons/BG404";

const NotFound = () => {


    return (
        <div className='h-full bg-brandcolor2'>
            <div className='pt-[78px] pb-[78px]'>
                <div>
                    <BG404 />
                </div>
                <h3 className='text-[96px] font-black text-center'>404</h3>
                <p className='text-center text-grey700 text-[18px]'>The link you clicekd may be broken or the page may have been removed.</p>
                <p className='text-center text-grey700 text-[18px]'>visit the <b>Homepage</b> Or <b>Contact</b> us about the problem</p>
            </div>
        </div>
    );
};

export default NotFound;