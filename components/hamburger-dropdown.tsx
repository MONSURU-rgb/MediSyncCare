export function HamburgerDropdown({ styles }: { styles: string }) {
  return (
    <ul className={`${styles}`}>
      <li>Home</li>
      <li>Features</li>
      <li>How it works</li>
      <li>Blog</li>
    </ul>
  );
}
