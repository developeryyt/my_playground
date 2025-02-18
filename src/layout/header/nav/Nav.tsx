import {ROUTES_TABLE} from "@/config/routeTable";
import Link from "next/link";

const Nav = () => {


    return (
        <ul>
            {
                ROUTES_TABLE.map((route) => {
                    return (
                        <li key={route.id}>
                            <Link href={`/${route.title}`}>{route.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Nav;