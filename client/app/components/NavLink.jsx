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
      className="nav-marker-link block px-2 py-2 text-lg font-semibold text-[var(--ink)] focus-visible:outline-none md:px-1 md:py-0 md:text-base"
    >
      {title}
    </Link>
  );
};

export default NavLink;
