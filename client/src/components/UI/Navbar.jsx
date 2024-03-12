export default function Nav({ links }) {
  return (
    <nav className="navbar">
            {links.map((link) => link)}
    </nav>
  );
}
