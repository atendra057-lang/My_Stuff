type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ number, eyebrow, title, children }: SectionHeadingProps) {
  return <div className="section-heading"><div className="section-label"><span>{number}</span><span>{eyebrow}</span></div><h2>{title}</h2>{children}</div>;
}
