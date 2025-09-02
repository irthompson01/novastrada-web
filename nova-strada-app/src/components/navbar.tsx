import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      className="py-4 bg-secondary text-white text-xlg md:text-xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarMenuToggle className="sm:hidden mr-2" />
        <NavbarBrand className="gap-3 max-w-fit">
                      <Link
              className="flex justify-start items-center gap-2 text-white"
              href="/"
          >
            <img 
              src="/assets/logo_crop_no_bg.png" 
              alt="NovaStrada LLC" 
              height={96} 
              className="h-24"
            />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-8 justify-start ml-6">
          {navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "text-white data-[active=true]:font-semibold hover:opacity-80 transition-colors",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu className="bg-secondary text-white text-lg">
        <div className="mx-4 mt-8 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="text-white hover:opacity-80 transition-colors"
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
