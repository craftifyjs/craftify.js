import { FC } from "react";

import Toolbar from "@/features/spaces/components/toolbar";

import { PropsWithChildren } from "@/types";

const Layouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-dvh w-dvw">
      <Toolbar />
      {children}
    </div>
  );
};

export default Layouts;
