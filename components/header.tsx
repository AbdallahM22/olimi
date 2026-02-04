import { Mails } from "lucide-react";
import { FreeMinutesCard } from "./ui/free-minutes-card";

function Header() {
  return (
    <header className="flex justify-between flex-wrap gap-1">
      <FreeMinutesCard minutes={120} days={5} />
      <div className="flex items-center gap-4">
        <div className="p-1 border border-gray-200 rounded-sm w-fit ">
          <Mails className="text-gray-500" />{" "}
        </div>
        <div className="p-1 rounded-full w-7 h-7 bg-black text-white flex items-center">
          OE
        </div>
      </div>
    </header>
  );
}
export default Header;
