"use client";

// import { ICONS } from "@/components/icons";
// import { Button } from "@/components/ui/button";
import Demo from "@/demo/demo";
// import { toast } from "sonner";

import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('@/demo/demo'), { ssr: false })



export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col flex-1 items-center justify-center">
      <NoSSR />
    </main>
  );
}
