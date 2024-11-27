"use client";

import { IoIosCode } from "react-icons/io";
import { IoFlashlightOutline } from "react-icons/io5";
import { PiBrain, PiMagicWand } from "react-icons/pi";
import { RiShapesLine } from "react-icons/ri";
import { TbFrame } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MoreTools = () => {
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="rounded-lg focus-visible:ring-offset-0"
              >
                <RiShapesLine />
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              More tools <span className="ml-1 inline-block">M</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent align={"end"} sideOffset={10} className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <TbFrame />
            <span className="text-[0.8125rem] leading-tight">Frame tool</span>
            <DropdownMenuShortcut>F</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <IoIosCode />
            <span className="text-[0.8125rem] leading-tight">Web embed</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <IoFlashlightOutline />
            <span className="text-[0.8125rem] leading-tight">
              Laser pointer
            </span>
            <DropdownMenuShortcut>K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel className="text-xs font-medium">
          Generate
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <PiBrain />
            <span className="text-[0.8125rem] leading-tight">
              Text to diagram
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <PiMagicWand />
            <span className="text-[0.8125rem] leading-tight">
              Wireframe to code
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreTools;
