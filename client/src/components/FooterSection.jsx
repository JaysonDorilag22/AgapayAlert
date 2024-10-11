import { Facebook, Twitter, Instagram } from "lucide-react" 

import { Link } from "react-router-dom"
export default function FooterSection() {
  return (
    <footer className="border-t">
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">agapayAlert</h3>
          <p className="text-sm text-muted-foreground">
            Empowering communities with rapid emergency alerts and response coordination.
          </p>
        </div>
        <nav className="space-y-4">
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline">How It Works</Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">Resources</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6" /> 
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
    </footer>
  )
}