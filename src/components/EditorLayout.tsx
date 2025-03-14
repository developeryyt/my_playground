import Pen from "@/components/icons/Pen";
import Link from "next/link";

const EditorLayout = () => {

    return (
        <div className='overflow-hidden text-right min-h-14'>
            <Link
                href='/login'
                className='inline-block w-[32px] h-[32px]'
            >
                <Pen className='w-full h-full' />
            </Link>
        </div>
    );
};

export default EditorLayout;