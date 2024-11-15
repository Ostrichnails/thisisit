export function NavBar({ links }) {
  return (
    <nav>
      <ul
        className={`flex font-bold justify-center gap-4 border-b bg-gray-900 p-2`}
      >
        {links.map((link) => {
          return (
            <a key={link.label} href={link.link}>
              {link.label}
            </a>
          );
        })}
      </ul>
    </nav>
  );
}
