import NavLink from "./NavLink";

/**
 * Represents the mobile menu with its corresponding items
 * Pre-Conditions:
 *  - `links` prop should be an array of objects, each containing a 'path' and a 'title'
 *  - Navbar from parent component should be "open" to display this overlay
 * @param {Object[]} links - An array of link objects for mobile menu that contains 'path' and 'title'
 * @param {string} links.path - path to link to
 * @param {string} links.title - the title for the link
 * @returns {JSX.Element} - list of navigation items rendered as an overlay for mobile viewports
 */
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
