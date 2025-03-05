import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import Mobilenav from "./Mobilenav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <SignedIn>
          <nav className="hidden md:flex gap-4 w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        {/* Login Button (for SignedOut users) */}
        <div className="flex justify-end gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <Mobilenav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
