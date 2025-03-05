import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="wrapper flex flex-col items-center justify-between gap-4 p-5 text-center sm:flex-row">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
            priority
          />
        </Link>

        <p className="text-gray-600">© 2025 Evently. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
