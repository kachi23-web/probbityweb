import { useState } from 'react';
import logoImage from '@/assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textClassName?: string;
}

const Logo = ({ className = '', size = 'md', showText = true, textClassName = '' }: LogoProps) => {
  const [imageError, setImageError] = useState(false);
  
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

  // Fallback SVG logo
  const FallbackLogo = () => (
    <div className={`${sizeClasses[size]} rounded-lg bg-accent flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 24 24" 
        className="w-6 h-6 text-accent-foreground"
        fill="currentColor"
      >
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      {!imageError ? (
        <div className={`${sizeClasses[size]} rounded-lg bg-accent flex items-center justify-center ${className}`}>
          <img 
            src={logoImage} 
            alt="Probbity Tech Logo" 
            className={`${sizeClasses[size]} object-contain`}
            onError={() => setImageError(true)}
            onLoad={() => setImageError(false)}
          />
        </div>
      ) : (
        <FallbackLogo />
      )}
      
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-foreground ${textClassName}`}>
          Probbity Tech
        </span>
      )}
    </div>
  );
};

export default Logo;