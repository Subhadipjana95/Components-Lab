

import { ICONS } from "@/components/icons";
import Demo from "@/demo/demo";

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
      
      <Demo/>

    </main>
  );
}
