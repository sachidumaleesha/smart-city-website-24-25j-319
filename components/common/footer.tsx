import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SubscribeForm } from "./subscribe-form"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-x rounded-t-2xl">
      <div className="hidden md:block relative w-full h-72">
        <Image 
          src="/images/footer_image.png" 
          alt="footer-image" 
          fill
          className="object-cover rounded-t-2xl"
          priority
        />
      </div>
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Company Name</h2>
            <p className="text-muted-foreground">Creating innovative solutions for a better tomorrow.</p>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              <Link href="#" className="hover:underline">
                Home
              </Link>
              <Link href="#" className="hover:underline">
                About
              </Link>
              <Link href="#" className="hover:underline">
                Services
              </Link>
              <Link href="#" className="hover:underline">
                Products
              </Link>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
            <SubscribeForm />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 mt-8 pt-8 border-t sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block relative w-full h-72">
        <Image 
          src="/images/footer_image.png" 
          alt="footer-image" 
          fill 
          className="object-cover"
        />
      </div> */}
    </footer>
  )
}

export default Footer