import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SiFacebook, SiYoutube } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-saffron">Janata Mistanna Bhandar</h3>
            <p className="text-sm text-muted-foreground">Authentic taste of Bengal since 1968. Serving pure traditions in every bite.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-saffron">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin size={16} /> Habra & Nagarukhra, WB</li>
              <li className="flex gap-2"><Phone size={16} /> +91 98765 43210</li>
              <li className="flex gap-2"><Mail size={16} /> info@janatamistanna.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-saffron">Business Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Clock size={16} /> Mon-Sat: 8AM - 9PM</li>
              <li className="flex gap-2"><Clock size={16} /> Sun: 8AM - 8PM</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-saffron">Socials</h4>
            <div className="flex gap-4">
              <SiFacebook size={24} className="cursor-pointer hover:text-saffron" />
              <SiYoutube size={24} className="cursor-pointer hover:text-saffron" />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © 2024 Janata Mistanna Bhandar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
