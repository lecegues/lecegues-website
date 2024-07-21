import Link from "next/link";

/**
 * NavLink Component wraps given props to function as a navigation link
 * @param {string} href - URL that the navigation item will link to
 * @param {string} title - the text displayed for navigation item
 * @returns {JSX.Element} - Stylized link component to be used in Navigation Menus
 */
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#37444B] text-xl md:text-xl font-normal rounded md:p-0 hover:text-[#9DA5AB]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
