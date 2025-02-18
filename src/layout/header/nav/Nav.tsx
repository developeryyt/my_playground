import {ROUTES_TABLE} from "@/config/routeTable";
import Link from "next/link";

const Nav = () => {


    return (
        <ul className='flex gap-10 items-center justify-center'>
            {
                ROUTES_TABLE.map((route) => {
                    return (
                        <li key={route.id} className=''>
                            <Link
                                className='p-3 font-semibold text-fontColor rounded-md hover:bg-brandcolor2'
                                href={`/${route.title}`}
                            >{route.title.toUpperCase()}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Nav;