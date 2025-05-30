type Props = {
  bg: string;
  id: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  noPadding?: boolean;
};

export default function Section({
  bg,
  id,
  children,
  fullHeight = true,
  noPadding = false,
}: Props) {
  return (
    <section
      id={id}
      className={`${bg} ${fullHeight ? "min-h-screen" : ""} flex flex-col items-center justify-center ${
        noPadding ? "" : "py-16 px-16"
      }`}
    >
      {children}
    </section>
  );
}
