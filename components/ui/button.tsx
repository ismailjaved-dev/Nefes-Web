import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-[1rem] bg-nefesprimary-100 uppercase text-white hover:bg-nefesprimary-200",
        gray:
          "rounded-[1rem] bg-gray-100 uppercase text-black hover:bg-gray-200",
          tertiary:
          "rounded-[1rem] bg-white uppercase text-black hover:bg-[#F2F2F2]",  
        grayOutline:
          "rounded-[1rem] bg-white uppercase border border-gray-200 text-black hover:bg-[#F2F2F2]",
        secondary:
          "rounded-[1rem] bg-black-200 uppercase text-white hover:bg-black-100",
        outlineWhite:
          "border border-white rounded-[1rem] uppercase text-white hover:bg-white hover:text-black-200",
        outlineDark:
          "border border-black-200 rounded-[1rem] uppercase text-black-200 hover:bg-black-200 hover:text-white",
      },
      size: {
        default: "px-[2.2rem] py-[1rem] text-base sm:text-xl",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
