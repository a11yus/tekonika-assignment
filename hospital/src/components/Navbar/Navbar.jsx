import {
  BellIcon,
  MessageCircleQuestionIcon as QuestionMarkCircleIcon,
  LogOutIcon,
} from "lucide-react";
import DropDownMenu from "./DropdownMenu";
const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between border-b">
      <div className="flex items-center space-x-8">
        <a href="#" className="text-gray-500">
          Dashboard
        </a>
        <a href="#" className="text-black border-b-2 border-black">
          Patient Register
        </a>

        <div className="relative group">
          <DropDownMenu tabName="Patient Data" />
        </div>
        <div className="relative">
          <DropDownMenu tabName=" Operation Theater" />
        </div>
        <div className="relative group">
          <DropDownMenu tabName="  Reports" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <QuestionMarkCircleIcon className="h-6 w-6" />
        <div className="relative">
          <BellIcon className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            1
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-[#c1c7ab] rounded-md flex items-center justify-center">
            <span className="text-gray-600">H</span>
          </div>
          <div>
            <p className="text-sm font-medium">Hardeep</p>
            <p className="text-xs text-gray-500">STAFF</p>
          </div>
        </div>
        <LogOutIcon className="h-5 w-5" />
      </div>
    </nav>
  );
};

export default Navbar;
