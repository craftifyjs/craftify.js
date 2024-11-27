"use client";

import { BiEraser } from "react-icons/bi";
import { HiOutlinePencil } from "react-icons/hi";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFrontHand } from "react-icons/md";
import { PiCursor } from "react-icons/pi";
import { RiText } from "react-icons/ri";
import { RxComponent1 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MainToolbar = () => {
  return (
    <div className="flex items-center gap-1.5">
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <MdOutlineFrontHand />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Hand (panning tool) <span className="ml-1 inline-block">H</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <PiCursor />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Selection <span className="ml-1 inline-block">V</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <RxComponent1 />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Shapes <span className="ml-1 inline-block">S</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <HiOutlinePencil />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Draw <span className="ml-1 inline-block">P</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <RiText />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Text <span className="ml-1 inline-block">T</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <IoImageOutline />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Insert image <span className="ml-1 inline-block">I</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-lg focus-visible:ring-offset-0"
            >
              <BiEraser />
            </Button>
          </TooltipTrigger>
          <TooltipContent align={"start"} sideOffset={10}>
            <p className="text-xs">
              Eraser <span className="ml-1 inline-block">E</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default MainToolbar;
