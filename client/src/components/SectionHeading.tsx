interface Props {
  label: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ label, title, intro }: Props) {
  return (
    <>
      <p className="label">{label}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </>
  );
}
