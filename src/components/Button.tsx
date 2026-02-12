import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    secondary:
      "border border-white/20 text-white hover:border-accent hover:text-accent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
