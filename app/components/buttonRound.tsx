interface ButtonRoundProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  href: string;
  download: string | null;
}

export default function ButtonRound({
  children,
  bgColor,
  textColor,
  href,
  download,
}: ButtonRoundProps) {
  return (
    <a
      className={`flex group ${textColor} ${bgColor} transition duration-300 ease-in-out hover:scale-110 rounded-sm text-xl px-10 py-2.5 mb-2`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      download={download}
    >
      {children}
    </a>
  );
}
