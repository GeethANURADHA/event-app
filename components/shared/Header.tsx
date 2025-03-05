import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-full  border-0">
      <div className="wrapper flex items-center justify-between"></div>
      <Link href="/" className="w-36">
        <Image
          src="/assets/images/logo.svg"
          width={128}
          height={38}
          alt="Evently logo"
        />
      </Link>

      <div className="flex w-32 justify-end  gap-3"></div>
    </header>
  );
};

export default Header;
