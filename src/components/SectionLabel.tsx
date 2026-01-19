interface SectionLabelProps {
  text: string;
}

const SectionLabel = ({ text }: SectionLabelProps) => {
  return (
    <div className="section-label">
      <div className="section-label-dots">
        <span className="section-label-dot"></span>
        <span className="section-label-dot"></span>
        <span className="section-label-dot-outline"></span>
      </div>
      <span className="text-foreground">{text}</span>
    </div>
  );
};

export default SectionLabel;
