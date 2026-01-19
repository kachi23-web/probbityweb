import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>support@probbity.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+ (234) 815-666-9858</span>
          </div>
          {/* <div className="hidden md:flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Awka, Anambra State, Nigeria </span>
          </div> */}
        </div>

        {/* Right side - Social media icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/share/1FVKTDvEqd/"
            className="w-4 h-4 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-2 h-2 text-accent-foreground" />
          </a>
          {/* <a
            href="#"
            className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4 text-accent-foreground" />
          </a> */}
          <a
            href="https://www.instagram.com/probbity?utm_source=qr&igsh=MTFvbHVsZGd5ZG50dw=="
            className="w-4 h-4 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-2 h-2 text-accent-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/company/probbity-tech"
            className="w-4 h-4 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-2 h-2 text-accent-foreground" />
          </a>
          {/* <a
            href="#"
            className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4 text-accent-foreground" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;