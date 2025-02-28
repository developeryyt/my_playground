import Link from "next/link";

const EditorLayout = () => {

    return (
        <div className=' overflow-hidden text-right min-h-14'>
            <Link
                href='/blog/post'
                className='inline-block align-middle bg-grey900 rounded-[10px] px-6 py-2 mt-3 hover:bg-white hover:border-[1px] hover:border-grey100'
            >
                <span className='text-white hover:text-grey900'>작성하기</span>
            </Link>
        </div>
    );
};

export default EditorLayout;