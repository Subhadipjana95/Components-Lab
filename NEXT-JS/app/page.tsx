"use client";

import { GradientText } from "@/components/gradient-text-fill";
import { GradientBackgroundText } from "@/components/gradient-background-text";
import { ClientGrid } from "@/components/client-grid";
import { ClientMarqueeBlur } from "@/components/client-marquee-blur";
import { GithubCalendar } from "@/components/contribution-calendar";
import { AvatarTooltips } from "@/components/avatar-tooltips";
import { ICONS } from "@/components/icons";
import { ThreeDButton } from "@/components/3d-button";
import { SlidingButton } from "@/components/sliding-button";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase",
  },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude",
  },
];

const TECH_STACK = [
  { id: 1, name: "React", designation: "UI Library", icon: ICONS.React },
  { id: 2, name: "Next.js", designation: "Framework", icon: ICONS.Nextjs },
  { id: 3, name: "TypeScript", designation: "Language", icon: ICONS.TypeScript },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "Styling",
    icon: ICONS.TailwindCSS,
  },
  { id: 5, name: "Radix UI", designation: "Primitives", icon: ICONS.RadixUI },
  { id: 6, name: "Motion", designation: "Animations", icon: ICONS.Motion },
  { id: 7, name: "Shadcn UI", designation: "Components", icon: ICONS.Shadcnui },
];

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center font-sans bg-background gap-4 py-20 pb-40 overflow-x-hidden">
      <div className="hidden">
      
      <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl max-w-[40%]">
        Welcome to{" "}
        <GradientBackgroundText
          colors="#ff6b6b, #ffd93d, #6bcb77, #4d96ff"
          className="text-5xl lg:text-6xl"
        >
          Groot UI
        </GradientBackgroundText>{" "}
        built with{" "}
        <GradientText colors="#cc0066, #1aff53, #004d99, #f5f56b, #a600e6">
          Next.js!
        </GradientText>
      </h1>

      <div className="w-full flex flex-col gap-24 my-10">
        {/* <section className="w-full relative">
          <ClientMarquee logos={logos} />
        </section> */}

        <section className="w-full max-w-6xl mx-auto">
          <ClientGrid logos={logos} />
        </section>

        
      </div>

      <div className="w-full">
        <GithubCalendar
          username="Subhadipjana95"
          cellSize={14}
          cellGap={3}
          cellShape="rounded"
          theme="sunset"
          showMonthLabels={true}
          showStats={true}
          showLegend={true}
          className="px-4"
        />
      </div>

      <AvatarTooltips items={TECH_STACK}  />  

      <ThreeDButton color1="oklch(79.2% 0.209 151.711)" color2="oklch(42.4% 0.199 265.638)">
        View on GitHub
      </ThreeDButton>
      </div>
      
      <SlidingButton >
        Get Started
      </SlidingButton>
    </main>
  );
}
