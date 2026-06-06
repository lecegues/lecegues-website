import NavLink from "./NavLink";

/**
 * Represents the mobile menu with its corresponding items
 * Pre-Conditions:
 *  - `links` prop should be an array of objects, each containing a 'path' and a 'title'
 *  - Navbar from parent component should be "open" to display this overlay
 * @param {string} id - id for associating the menu with its toggle button
 * @param {Object[]} links - An array of link objects for mobile menu that contains 'path' and 'title'
 * @param {string} links.path - path to link to
 * @param {string} links.title - the title for the link
 * @param {Function} onSelect - callback used to close the menu after selection
 * @returns {JSX.Element} - list of navigation items rendered as an overlay for mobile viewports
 */
const MenuOverlay = ({ links, id, onSelect }) => {
  return (
    <ul
      id={id}
      className="mx-5 flex flex-col items-center gap-1 border-t border-[var(--ink)]/25 py-4 md:hidden"
    >
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} onClick={onSelect} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
