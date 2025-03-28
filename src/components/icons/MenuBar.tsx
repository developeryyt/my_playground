import {COMMONPROPS} from "@/types";

const MenuBar = ({className}: { className ?: COMMONPROPS['className'] }) => {
    return (
        <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 39 39"
            className={className}
        >
            <path id="View" className="st0" d="M14,0H3C1.3,0,0,1.3,0,3v11c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3V3C17,1.3,15.7,0,14,0z M14,14H3V3h11
	V14z M36,0H25c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3V3C39,1.3,37.7,0,36,0z M36,14H25V3h11V14z M14,22H3
	c-1.7,0-3,1.3-3,3v11c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3V25C17,23.3,15.7,22,14,22z M14,36H3V25h11V36z M36,22H25c-1.7,0-3,1.3-3,3
	v11c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3V25C39,23.3,37.7,22,36,22z M36,36H25V25h11V36z"
            />
        </svg>
    );
};

export default MenuBar;