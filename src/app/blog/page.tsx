import {cookies} from "next/headers";
import EditorLayout from "@/components/EditorLayout";

const Page = async () => {

    const cookiesStore = await cookies();
    const myKey = cookiesStore.get('writeFor')?.value;
    const isMe = myKey ===  process.env.NEXT_PUBLIC_SECRET_KEY;



    return (
        <div>
            {
                isMe ? <EditorLayout /> : null
            }
        </div>
    );
};

export default Page;