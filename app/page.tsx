export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <span className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
        I am
      </span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
        YOUR NAME
      </h1>
      <div className="mt-6 text-xs tracking-[0.2em] text-muted-foreground text-center uppercase">
        <div>A Developer</div>
        <div>&amp; Designer</div>
      </div>
    </div>
  );
}
