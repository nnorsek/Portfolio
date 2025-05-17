interface ButtonRoundProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  href: string;
  download?: string;
  openAndDownload?: boolean;
}

export default function ButtonRound({
  children,
  bgColor,
  textColor,
  href,
  download,
  openAndDownload = false,
}: ButtonRoundProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (openAndDownload) {
      e.preventDefault();

      // Open the PDF in a new tab
      window.open(href, "_blank");

      // Create a hidden link to trigger download
      const link = document.createElement("a");
      link.href = href;
      link.download = download ?? "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <a
      className={`flex group ${textColor} ${bgColor} transition duration-300 ease-in-out hover:scale-110 rounded-sm text-xl px-10 py-2.5 mb-2`}
      href={href}
      target={openAndDownload ? undefined : "_blank"}
      rel="noopener noreferrer"
      download={openAndDownload ? undefined : download ?? undefined}
      onClick={openAndDownload ? handleClick : undefined}
    >
      {children}
    </a>
  );
}
