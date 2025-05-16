type Props = {
    bg: string;
    id: string;
    children: React.ReactNode;
  };
  
  export default function Section({ bg, id, children }: Props) {
    return (
      <section
        id={id}
        className={`${bg} min-h-screen flex flex-col items-center justify-center px-6`}
      >
        {children}
      </section>
    );
  }
  