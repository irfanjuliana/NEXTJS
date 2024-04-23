import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2 ">
        <li>
          <Link href="/" className="text-gray-80 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-gray-80 hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-80 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            prefetch={false}
            className="text-gray-80 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}