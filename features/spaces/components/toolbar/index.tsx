"use client";

import { MdOutlineLockOpen } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import MainToolbar from "@/features/spaces/components/toolbar/main-toolbar";
import MoreTools from "@/features/spaces/components/toolbar/more-tools";

const Toolbar = () => {
  return (
    <section className="fixed left-1/2 top-4 z-10 inline-flex -translate-x-1/2 rounded-lg bg-white px-1.5 py-1 shadow-island">
      <div className="flex h-full w-full flex-row items-center">
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <Button variant={"ghost"} size={"icon"} className="rounded-lg">
                <MdOutlineLockOpen />
              </Button>
            </TooltipTrigger>
            <TooltipContent align={"start"} sideOffset={10}>
              <p className="text-xs">Keep selected tool active after drawing</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator orientation={"vertical"} className="mx-1.5 h-6" />
        <MainToolbar />
        <Separator orientation={"vertical"} className="mx-1.5 h-6" />
        <MoreTools />
      </div>
    </section>
  );
};

export default Toolbar;
