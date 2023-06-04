import Navigation from "./Navigation";
import Image from "next/image";
import Link from "next/link";
import { getPages } from "@/lib/getPages";

const Header = async () => {
  const pages: Page[] = await getPages();

  return (
    <header className="sticky top-0 left-0 w-full bg-slate-600 py-1 px-3 flex justify-between items-center">
      <div className="">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            width={200}
            height={150}
            alt="Rixner net"
          />
        </Link>
      </div>
      <Navigation pages={pages} />
    </header>
  );
};

export default Header;
