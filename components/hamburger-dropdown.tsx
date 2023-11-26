import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export function HamburgerDropdown({
  styles,
  withDownloadButton,
  toggle,
  opened,
}: {
  styles: string;
  withDownloadButton?: boolean;
  toggle?: (opened: boolean) => void | undefined;
  opened?: boolean;
}) {
  return (
    <ul className={`${styles}`}>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        {" "}
        <Link href="#core-features">Features</Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="#how-it-works">How it works</Link>
      </li>
      <li onClick={() => (opened && toggle ? toggle(opened) : "")}>
        <Link href="#blog-post">Blog</Link>
      </li>
      {withDownloadButton ? (
        <Link href="/">
          <button className="rounded-[50px] p-3 bg-primary-500 flex gap-[10px] items-center cursor-pointer hover:bg-primary-500/90">
            <FiDownload color="white" />
            <h5 className="text-base font-medium font-jakarta text-white whitespace-nowrap">
              Download App
            </h5>
          </button>
        </Link>
      ) : null}
    </ul>
  );
}
