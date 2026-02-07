import { Navigation } from "@/components/navigation";

export function Header() {
  return (
    <header className="flex justify-between items-start p-8">
      {/* Logo / Monogram - top left */}
      <div className="text-xs font-light tracking-widest text-muted-foreground">
        <div>PO</div>
        <div>RT</div>
      </div>

      {/* Navigation */}
      <Navigation />
    </header>
  );
}
