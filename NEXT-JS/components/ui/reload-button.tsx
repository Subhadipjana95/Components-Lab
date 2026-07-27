"use client";

import { Button } from "./button";
import { RotateCw } from "lucide-react";

const ReloadButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-14 right-2 cursor-pointer rounded-full size-10 shadow-lg bg-background/80 backdrop-blur-sm border-border hover:bg-accent active:rotate-180 transition-all duration-300"
      onClick={() => window.location.reload()}
    >
      <RotateCw className="stroke-1" />
    </Button>
  );
};

export default ReloadButton;
