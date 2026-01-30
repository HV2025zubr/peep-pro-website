export function BrandName({ className = "", variant = "default" }: { className?: string; variant?: "default" | "light" }) {
  const peepColor = variant === "light" ? "text-white" : "text-black";
  const proColor = "text-blue-400";
  
  return (
    <span className={`font-bold ${className}`}>
      <span className={peepColor}>PEEP</span><span className={proColor}>PRO</span>
    </span>
  );
}