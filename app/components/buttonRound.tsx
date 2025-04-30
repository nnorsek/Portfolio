interface ButtonRoundProps {
  text: string;
}
export default function ButtonRound({ text }: ButtonRoundProps) {
  return (
    <button className="text-black bg-white transition duration-300 ease-in-out hover:scale-130  rounded-full text-xl px-18 py-2.5 text-center mb-2">
      {text}
    </button>
  );
}
