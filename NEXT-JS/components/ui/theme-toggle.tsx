"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-8 right-[41%] z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full size-9.5 shadow-lg bg-background/80 backdrop-blur-sm border-border hover:bg-accent flex items-center justify-center"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 stroke-1" />
        <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 stroke-1" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}