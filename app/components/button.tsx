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
      className={`py-2 text-center w-60 shadow-3xl/45 text-blue-300 bg-gray-900 transition duration-300 ease-in-out hover:scale-110 rounded-sm text-xl`}
    >
      {text}
    </a>
  );
}
