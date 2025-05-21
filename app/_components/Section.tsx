type Props = {
  bg: string;
  id: string;
  children: React.ReactNode;
  fullHeight?: boolean;
};

export default function Section({
  bg,
  id,
  children,
  fullHeight = true,
}: Props) {
  return (
    <section
      id={id}
      className={`${bg} ${
        fullHeight ? "min-h-screen" : ""
      } flex flex-col items-center justify-center px-6 py-16`}
    >
      {children}
    </section>
  );
}
