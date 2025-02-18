import {ROUTES_TABLE} from "@/config/routeTable";
import Link from "next/link";

const Nav = () => {


    return (
        <ul className='flex gap-10 items-center justify-center'>
            {
                ROUTES_TABLE.map((route) => {
                    return (
                        <li key={route.id} className=''>
                            <Link className='p-3 font-semibold text-fontColor rounded-md' href={`/${route.title}`}>{route.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Nav;