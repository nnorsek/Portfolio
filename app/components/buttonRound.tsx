interface ButtonRoundProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
}

export default function ButtonRound({
  children,
  bgColor,
  textColor,
}: ButtonRoundProps) {
  return (
    <button
      className={`flex group ${textColor} ${bgColor} transition duration-300 ease-in-out hover:scale-110 rounded-sm text-xl px-10 py-2.5 mb-2`}
    >
      {children}
    </button>
  );
}
