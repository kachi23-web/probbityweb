import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = "+2348156669858"; // Example: "1234567890" for +1 234 567 890
  const message = "Hi! I'm interested in your software development services.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Icon */}
        <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-green-500 group-hover:bg-green-600 flex items-center justify-center transition-colors">
          <MessageCircle className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
        </div>
        
        {/* Text that appears on hover */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          <span className="text-sm sm:text-base font-semibold whitespace-nowrap pr-4">
            Chat with us
          </span>
        </div>
      </a>
      
      {/* Pulse animation ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none"></div>
    </div>
  );
};

export default WhatsAppButton;