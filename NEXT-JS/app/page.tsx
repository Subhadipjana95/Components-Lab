import { GitHubStars } from "@/components/github-stars";
import { GradientText } from "@/components/gradient-text-fill";
import { GradientBackgroundText } from "@/components/gradient-background-text";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background">
      <GitHubStars repo="vercel/next.js" className="mb-8" />
      <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl max-w-[40%]">
        Welcome to{" "}
        <GradientBackgroundText
          colors="#ff6b6b, #ffd93d, #6bcb77, #4d96ff"
          className="text-5xl lg:text-6xl"
        >
          Groot UI
        </GradientBackgroundText>{" "} built with{" "}
        <GradientText colors="#cc0066, #1aff53, #004d99, #f5f56b, #a600e6">
          Next.js!
        </GradientText>
      </h1>
    </div>
  );
}
