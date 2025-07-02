import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
  <span className="opacity-0 animate-fade-in">Hi, I'm</span>
  <span className="text-primary opacity-0 animate-fade-in-delay-1"> Huy Vu</span>
</h1>

<div className="flex flex-row-reverse items-start gap-6 max-w-4xl mx-auto mt-6 opacity-0 animate-fade-in-delay-3">
  <img
    src="/avatar/avatar.png"
    alt="Avatar"
    className="ml-4 w-30 h-30 rounded-full border border-gray-300 shadow-lg object-cover"
  />
  <p className="text-lg md:text-xl text-muted-foreground">
    I am currently majoring in Computer Science and Data Science at Purdue University and I am passionate about software engineering and machine learning. 
    Outside of classes, I enjoy cooking and listening to New Jeans.
  </p>
</div>


          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};