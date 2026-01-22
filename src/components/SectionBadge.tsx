import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-primary font-semibold text-sm">
      <div className="flex gap-0.5">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="w-2 h-2 rounded-full bg-primary" />
      </div>
      {children}
    </div>
  );
};

export default SectionBadge;
