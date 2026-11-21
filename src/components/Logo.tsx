import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** "light" = purple mark + dark text (for light backgrounds); "dark" = white mark + white text */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const markSizes = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
};

const textSizes = {
  sm: { top: "text-sm", bottom: "text-base" },
  md: { top: "text-base", bottom: "text-lg" },
  lg: { top: "text-xl", bottom: "text-2xl" },
};

/** Probbity Tech brand lockup: globe mark + stacked "Probbity / TECH" wordmark. */
const Logo = ({ className, variant = "light", size = "md", showText = true }: LogoProps) => {
  const dark = variant === "dark";
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src={dark ? "/img/logo-mark-white.png" : "/img/logo-mark.png"}
        alt={showText ? "" : "Probbity Tech"}
        aria-hidden={showText}
        className={cn(markSizes[size], "w-auto shrink-0")}
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              textSizes[size].top,
              "font-bold tracking-tight",
              dark ? "text-primary-foreground" : "text-[#A53E97]",
            )}
          >
            Probbity
          </span>
          <span
            className={cn(
              textSizes[size].bottom,
              "font-extrabold tracking-[0.12em] -mt-0.5",
              dark ? "text-accent" : "text-primary",
            )}
          >
            TECH
          </span>
        </span>
      )}
    </span>
  );
};

export default Logo;
