import {cookies} from "next/headers";
import EditorLayout from "@/components/EditorLayout";

import '../../js/regexp';

const Page = async () => {

    // const cookiesStore = await cookies();
    // const myKey = cookiesStore.get('writeFor')?.value;
    // const isMe = myKey ===  process.env.NEXT_PUBLIC_SECRET_KEY;



    return (
        <div className='px-5 pt-3'>
            <EditorLayout />
        </div>
    );
};

export default Page;