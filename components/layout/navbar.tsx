"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { LayoutDashboard } from "lucide-react";
import { useDemoModal } from "@/components/home/demo-modal";

export default function NavBar() {
  const scrolled = useScroll(50);
  const { DemoModal, setShowDemoModal } = useDemoModal();

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="BHR logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>BHR</p>
          </Link>
          <DemoModal />
            <button
              onClick={() => setShowDemoModal(true)}
              className="rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black"
            >
              Vote for us
            </button>
        </div>
      </div>
    </>
  );
}
