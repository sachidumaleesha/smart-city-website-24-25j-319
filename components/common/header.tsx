"use client";

import * as React from "react";
import { Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toogle";
import Logo from "./logo";

const Header = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="hidden justify-between lg:flex sm:mx-10 md:mx-0 border px-4 py-2 rounded-2xl mx-5 bg-white dark:bg-black">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Logo />
                <span className="text-xl font-bold">Smart City</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#"
              >
                Home
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#"
              >
                Pricing
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <ThemeToggle />
          </div>
        </nav>

        {/* mobile navbar */}
        <div className="block lg:hidden mx-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sheet key="right">
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex justify-between items-center gap-2 mt-5">
                        <div className="flex items-center gap-2">
                          <Link href="/" className="flex items-center gap-2">
                            <Logo />
                            <span className="text-xl font-bold">
                              Smart City
                            </span>
                          </Link>
                        </div>
                        <ThemeToggle />
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mb-8 mt-8 flex flex-col gap-4">
                    <Link href="#" className="font-semibold">
                      Home
                    </Link>
                    <Link href="#" className="font-semibold">
                      Pricing
                    </Link>
                    <Link href="#" className="font-semibold">
                      Blog
                    </Link>
                  </div>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 justify-start">
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Press
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Contact
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Imprint
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Sitemap
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Legal
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground"
                        )}
                        href="#"
                      >
                        Cookie Settings
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      <Link href="/sign-in">
                        <Button variant="outline" className="w-full">
                          Log in
                        </Button>
                      </Link>
                      <Link href="/sign-up">
                        <Button className="group w-full">
                          Start For Free
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Logo />
              <span className="text-xl font-bold">Smart City</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
