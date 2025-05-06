interface ButtonProps {
  text: string;
  href: string;
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-60 shadow shadow-2xl/45 text-blue-300 bg-gray-800 transition duration-300 ease-in-out hover:scale-110 rounded-sm text-xl px-10 py-2.5 mb-2`}
    >
      {text}
    </a>
  );
}
