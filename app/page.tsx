import Image from "./images/image_website_template.png";
import Button from "./components/button";
import Header from "./pages/header";
export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div className="p-10">
          <div className="mt-40 flex items-start gap-4">
            <div className="h-130 w-340 shadow-2xl hover:cursor-pointer bg-blue-800">
              <img
                src={Image.src}
                alt="website-template"
                className="w-140 pl-5 py-15"
              />
            </div>
            <div className="ml-[-2em] flex flex-col w-full h-full">
              <h2 className="font-bold text-6xl pb-2">Lorem ipsum</h2>
              <p className="mt-1.5 w-70 h-70 font-bold text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="flex flex-row gap-x-5">
                <Button text={"See Code"} />
                <Button text={"Visit Demo"} />
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-70 items-start gap-4">
            <div className="h-130 w-200 shadow-2xl hover:cursor-pointer bg-blue-800 relative">
              <img
                src={Image.src}
                alt="website-template"
                className="w-140 pl-5 py-15"
              />
            </div>
            <div className="-mr-250 ml-70 flex flex-col w-full h-full relative">
              <h2 className="font-bold text-6xl pb-2">Lorem ipsum</h2>
              <p className="mt-1.5 w-70 h-70 font-bold text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="flex flex-row gap-x-5">
                <Button text={"See Code"} />
                <Button text={"Visit Demo"} />
              </div>
            </div>
          </div>
          <div className="mt-70 flex items-start gap-4">
            <div className="h-130 w-340 shadow-2xl hover:cursor-pointer bg-blue-800">
              <img
                src={Image.src}
                alt="website-template"
                className="w-140 pl-5 py-15"
              />
            </div>
            <div className="ml-[-2em] flex flex-col w-full h-full">
              <h2 className="font-bold text-6xl pb-2">Lorem ipsum</h2>
              <p className="mt-1.5 w-70 h-70 font-bold text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="flex flex-row gap-x-5">
                <Button text={"See Code"} />
                <Button text={"Visit Demo"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
