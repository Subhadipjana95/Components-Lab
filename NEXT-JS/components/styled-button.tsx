import * as React from "react";
import Link from "next/link";
import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium text-shadow-lg shadow-accent active:scale-95 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            size: {
                sm: "h-8 px-3",
                md: "h-10 px-4",
                lg: "h-12 px-6",
            },
            variant:{
                neutral: "bg-radial from-foreground/50 to-muted/80 ring-2 ring-foreground/20 border border-foreground/60",
                rose: "text-background bg-radial from-rose-500 to-rose-800 border border-rose-400 ring-2 ring-rose-800 hover:bg-radial hover:from-rose-600 hover:to-rose-900",
                blue: "text-background bg-radial from-blue-500 to-blue-800 border border-blue-400 ring-2 ring-blue-800 hover:bg-radial hover:from-blue-500 hover:to-blue-900",
            }
        },
        defaultVariants: {
            size: "md",
            variant: "neutral"
        },
    }
);

type StyledButtonProps = VariantProps<typeof buttonVariants> & {
    href: string;
    children: React.ReactNode;
    className?: string;
};

const StyledButton = React.forwardRef<HTMLAnchorElement, StyledButtonProps>(
    ({ href, children, className, size, variant, ...props }, ref) => {
        return (
            <Link
                href={href}
                className={cn(buttonVariants({ size, variant, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </Link>
        );
    }
);

StyledButton.displayName = "StyledButton";

export { StyledButton, buttonVariants };