import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="group flex flex-row items-center text-left pl-4 pb-1 w-50 border-purple-500 text-2xl font-bold transition duration-300 border-b-2 hover:border-purple-600 hover:bg-purple-600 hover:cursor-pointer">
      {text}
      <FaArrowRightLong className="ml-2 mt-1 text-2xl transform opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </button>
  );
}
