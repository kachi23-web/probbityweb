import { useState, useEffect } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textClassName?: string;
}

const Logo = ({ className = '', size = 'md', showText = true, textClassName = '' }: LogoProps) => {
  const [useImage, setUseImage] = useState(true);
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-12 h-12 sm:w-16 sm:h-16'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl'
  };

  // SVG logo fallback
  const SVGLogo = () => (
    <div className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-accent to-lime flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 32 32" 
        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
        fill="currentColor"
      >
        <path d="M8 6h10c3.314 0 6 2.686 6 6s-2.686 6-6 6H8v8H6V6h2zm0 2v8h10c2.21 0 4-1.79 4-4s-1.79-4-4-4H8z"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.8"/>
      </svg>
    </div>
  );

  return (
    <>
      {/* Logo Icon */}
      {useImage ? (
        <div className={`${sizeClasses[size]} rounded-lg bg-accent flex items-center justify-center p-1 ${className}`}>
          <img 
            src="/img/probbity-logo-3.png"
            alt="Probbity Tech Logo" 
            className="w-full h-full object-contain"
            onError={() => setUseImage(false)}
          />
        </div>
      ) : (
        <SVGLogo />
      )}
      
      {/* Logo Text */}
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-primary-foreground ml-2 ${textClassName}`}>
          Probbity Tech
        </span>
      )}
    </>
  );
};

export default Logo;