"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ pages }: Pages) => {
  const pathname = usePathname();
  let activeLink: boolean;
  return (
    <nav>
      <ul className="flex gap-x-2 uppercase">
        {pages &&
          pages
            .map((page: Page) => {
              if (page.slug === "home") {
                activeLink = pathname === "/";
              } else {
                activeLink = `/${page.slug}` === pathname;
              }

              return (
                <li key={page.id}>
                  <Link
                    href={page.slug === "home" ? "/" : page.slug}
                    className={`text-white font-bold transition-colors hover:text-orange-500 ${
                      activeLink && "text-orange-500"
                    }`}
                  >
                    {page.title}
                  </Link>
                </li>
              );
            })
            .slice(0, pages.length - 2)}
      </ul>
    </nav>
  );
};

export default Navigation;
