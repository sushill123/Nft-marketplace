import React from "react";
import { Music, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Header = () => {
  return (
    <header className="container">
      <nav className="py-5 px-5 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl font-bold">Nft.</h1>
          </div>
          <div className="ml-[4rem]">
            <Select>
              <SelectTrigger className="w-[110px] p-5 border-2 border-[#642fc5]">
                <SelectValue placeholder="Buy Nft" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Art</SelectItem>
                <SelectItem value="dark">Music</SelectItem>
                <SelectItem value="system">Gaming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative hidden md:block">
          <ul className="flex items-center justify-between gap-5">
            <li className="cursor-pointer font-medium">Home</li>
            <li className="cursor-pointer font-medium">About</li>
            <li>
              <Badge
                variant="default"
                className="absolute -top-3 -right-5 cursor-pointer"
              >
                3
              </Badge>
              <ShoppingBag className="cursor-pointer" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
