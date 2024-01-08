import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#37444B] text-xl md:text-base rounded md:p-0 hover:text-[#9DA5AB]"
        >
            {title}
        </Link>

    )

}

export default NavLink;