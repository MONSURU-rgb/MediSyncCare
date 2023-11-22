import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export function HamburgerDropdown({
  styles,
  withDownloadButton,
}: {
  styles: string;
  withDownloadButton?: boolean;
}) {
  return (
    <ul className={`${styles}`}>
      <li>Home</li>
      <li>Features</li>
      <li>How it works</li>
      <li>Blog</li>
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
