"use client";
import * as React from "react";
import { useState } from "react";
import { Menu, Truck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavLinks: { title: string; href: string }[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "À propos",
    href: "/about",
  },
  {
    title: "Garde-Meubles",
    href: "/garde-meubles",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);
  return (
    <>
      <nav className="py-4 bg-gray-900/5 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="2xl:max-w-7xl lg:max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 px-3 lg:px-0">
            <div className="bg-green-600 p-2 rounded-lg text-white">
              <Truck size={24} />
            </div>
            <span className="2xl:text-xl text-base font-bold tracking-tight text-white uppercase">
              Cerdjio <span className="text-green-500">Déménagement</span>
            </span>
          </div>

          <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-300">
            <NavigationMenu>
              <NavigationMenuList>
                {NavLinks.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.title !== "Services" ? (
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={cn(
                            "px-3 py-2 rounded-md transition-colors hover:text-green-500",
                            pathname === link.href &&
                              "text-green-500 font-semibold",
                          )}
                        >
                          {link.title}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "px-3 py-2 rounded-md transition-colors hover:text-green-500 cursor-pointer",
                            pathname === link.href &&
                              "text-green-500 focus:text-green-500 font-semibold",
                          )}
                        >
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-gray-900 border-gray-800 z-50">
                          <ul className="grid gap-3 p-6 md:w-150 lg:w-180 lg:grid-cols-3">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  className="rounded-md bg-linear-to-b from-green-600/20 to-green-600/5 p-6 h-full w-full max-w-50 focus:shadow-md border border-green-500/10"
                                  href="/services"
                                >
                                  <Truck className="text-green-500 w-12 h-12" />
                                  <div className="mb-2 mt-4 text-xl font-black text-white uppercase italic">
                                    Cerdjio
                                    <span className="text-green-500">Move</span>
                                  </div>
                                  <p className="text-sm leading-tight text-gray-400">
                                    Expertise logistique et déménagement
                                    professionnel vers la France et toute
                                    l&apos;Europe.
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <div className="flex flex-col gap-2">
                              <span className="text-xs font-bold text-green-500 uppercase px-3 tracking-widest">
                                France
                              </span>
                              <ListItem
                                href="/services/particuliers"
                                title="Particuliers"
                              >
                                Déménagement résidentiel vers toutes les villes
                                françaises.
                              </ListItem>
                              <ListItem
                                href="/services/entreprises"
                                title="Entreprises"
                              >
                                Transfert de bureaux et logistique pro.
                              </ListItem>
                               <ListItem
                                href="/services/paris-berlin"
                                title="Paris / Berlin"
                              >
                                Déménagement groupé France - Allemagne.
                              </ListItem>
                            </div>

                            <div className="flex flex-col gap-2">
                              <span className="text-xs font-bold text-green-500 uppercase px-3 tracking-widest">
                                Europe
                              </span>
                              <ListItem
                                href="/services/belgique"
                                title="Belgique & Nord"
                              >
                                Liaisons quotidiennes Paris-Bruxelles.
                              </ListItem>
                              <ListItem
                                href="/services/espagne"
                                title="Espagne & Sud"
                              >
                                Déménagement sécurisé vers le soleil.
                              </ListItem>
                              <ListItem
                                href="/services/groupage"
                                title="Groupage"
                              >
                               Économisez sur vos trajets longs
                              </ListItem>
                              <ListItem
                                href="/services/international"
                                title="Voir plus..."
                              >
                                Allemagne, Suisse et toute l&apos;Europe.
                              </ListItem>
                            </div>
                          </ul>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button variant={"green"} className="hidden lg:inline-flex">
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="lg:hidden fixed top-4 right-4 z-50">
          <Menu className="w-8 h-8 text-white" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-gray-900/95 backdrop-blur-md border-l border-gray-800 p-0"
        >
          <SheetHeader className="p-6 border-b border-gray-800">
            <SheetTitle className="text-left flex items-center gap-2">
              <div className="bg-green-600 p-2 rounded-lg text-white">
                <Truck size={20} />
              </div>
              <span className="text-sm font-bold tracking-tight text-white uppercase">
                Cerdjio <span className="text-green-500">Déménagement</span>
              </span>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-2 p-6 space-y-5 overflow-y-scroll">
            {NavLinks.map((link) => (
              <div key={link.title}>
                {link.title !== "Services" ? (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-lg font-medium py-3 border-b  border-white/5 transition-colors",
                      pathname === link.href
                        ? "text-green-500"
                        : "text-gray-300",
                    )}
                    onClick={closeSheet}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div className="py-3 border-b border-white/5">
                    <Link
                      href="/services"
                      onClick={closeSheet}
                      className="text-lg font-medium text-gray-300 focus:text-green-500 mb-4 block"
                    >
                      Services
                    </Link>
                    <div className="grid gap-4 pl-4 border-l-2 border-green-500/30 text-gray-200">
                      <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">
                          France
                        </span>
                        <Link
                          href="/services/particuliers"
                          onClick={closeSheet}
                          title="Particuliers"
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          Particuliers
                        </Link>
                        <Link
                          href="/services/entreprises"
                          onClick={closeSheet}
                          title="Entreprises "
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          Entreprises
                        </Link>
                        <Link
                          href="/services/paris-berlin"
                          onClick={closeSheet}
                          title="Paris / Berlin"
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          Paris / Berlin
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">
                          Europe
                        </span>
                        <Link
                          href="/services/belgique"
                          onClick={closeSheet}
                          title="Belgique & Nord"
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          Belgique & Nord
                        </Link>
                        <Link
                          href="/services/espagne"
                          onClick={closeSheet}
                          title="Espagne & Sud"
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          Espagne & Sud
                        </Link>
                        <Link
                          href="/services/groupage"
                          onClick={closeSheet}
                          title="Groupage"
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          Groupage
                        </Link>
                        <Link
                          href="/services/international"
                          onClick={closeSheet}
                          title="Voir plus..."
                          className="bg-gray-800/30 rounded-md py-2 px-5"
                        >
                          International
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8">
              <Button
                variant={"green"}
                className="w-full h-14 text-lg font-bold"
                asChild
              >
                <Link href="/contact" onClick={closeSheet}>Demander un devis</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-green-500 focus:bg-gray-800 focus:text-green-500",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
