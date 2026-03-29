import { GitHubStars } from "@/components/github-stars";
import { GradientText } from "@/components/gradient-text-fill";
import { GradientBackgroundText } from "@/components/gradient-background-text";
import { DiscordOnline } from "@/components/discord-online-react";
import { ClientMarquee } from "@/components/client-marquee";
import { ClientGrid } from "@/components/client-grid";
import { ClientMarqueeBlur } from "@/components/client-marquee-blur";

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" }, 
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" }, 
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },       
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" }, 
  { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "Clerk" },   
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso" },   
  { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "Claude" },
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background gap-4 py-20 pb-40 overflow-x-hidden">
      <div className="flex gap-4 mb-8">
        <GitHubStars repo="vercel/next.js" />
        <DiscordOnline guildId="1487752291602665574" inviteURL="https://discord.gg/BtXPr8aFf"/>
      </div>
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
      
      <div className="w-full flex flex-col gap-24 mt-20">
        <section className="w-full relative">
          <ClientMarquee logos={logos} />
        </section>
        
        <section className="w-full max-w-6xl mx-auto">
          <ClientGrid logos={logos} />
        </section>

        <section className="w-full relative">
          <ClientMarqueeBlur logos={logos} />
        </section>
      </div>
      </div>
  );
}

