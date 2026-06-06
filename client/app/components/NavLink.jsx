import Link from "next/link";

/**
 * NavLink Component wraps given props to function as a navigation link
 * @param {string} href - URL that the navigation item will link to
 * @param {string} title - the text displayed for navigation item
 * @param {Function} onClick - optional callback used when a navigation link is selected
 * @returns {JSX.Element} - Stylized link component to be used in Navigation Menus
 */
const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="nav-marker-link block px-2 py-2 text-lg font-semibold text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--marker)] md:px-1 md:py-0 md:text-base"
    >
      {title}
    </Link>
  );
};

export default NavLink;
