interface ButtonRoundProps {
  children: React.ReactNode;
}
export default function ButtonRound({ children }: ButtonRoundProps) {
  return (
    <button className="group text-black bg-white transition duration-300 ease-in-out hover:scale-110 rounded-full text-xl px-18 py-2.5 mb-2">
      {children}
    </button>
  );
}
