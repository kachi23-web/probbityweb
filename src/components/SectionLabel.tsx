interface SectionLabelProps {
  text?: string;
  children?: React.ReactNode;
}

// const SectionLabel = ({ text }: SectionLabelProps) => {
//   return (
//     <div className="section-label">
//       <div className="section-label-dots">
//         <span className="section-label-dot"></span>
//         <span className="section-label-dot"></span>
//         <span className="section-label-dot-outline"></span>
//       </div>
//       <span className="text-foreground">{text}</span>
//     </div>
//   );
// };

const SectionLabel: React.FC<SectionLabelProps> = ({ text, children }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm">
      <div className="flex gap-0.5">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="w-2 h-2 rounded-full bg-primary" />
      </div>
      {children || text}
    </div>
  );
};

export default SectionLabel;


// import React from 'react';

// interface SectionBadgeProps {
//   children: React.ReactNode;
// }

// const SectionBadge: React.FC<SectionBadgeProps> = ({ children }) => {
//   return (
//     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm">
//       <div className="flex gap-0.5">
//         <span className="w-2 h-2 rounded-full bg-accent" />
//         <span className="w-2 h-2 rounded-full bg-primary" />
//         <span className="w-2 h-2 rounded-full bg-primary" />
//       </div>
//       {children}
//     </div>
//   );
// };

// export default SectionBadge;
