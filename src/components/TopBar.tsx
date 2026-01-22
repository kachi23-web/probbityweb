import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">support@probbity.com</span>
            <span className="sm:hidden">Email</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden md:inline">+ (234) 815-666-9858</span>
            <span className="md:hidden">Call</span>
          </div>
        </div>

        {/* Right side - Social media icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.facebook.com/share/1FVKTDvEqd/"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
          </a>
          <a
            href="https://www.instagram.com/probbity?utm_source=qr&igsh=MTFvbHVsZGd5ZG50dw=="
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/company/probbity-tech"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;