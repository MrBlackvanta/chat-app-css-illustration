import { Backdrop, BookingIntro } from "@/components";
import { Phone } from "@/components/chat";
import { Attribution } from "@/components/layout";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-16 px-8 py-16 lg:flex-row lg:gap-31.25">
        <div className="relative shrink-0">
          <Backdrop />
          <Phone />
        </div>
        <BookingIntro />
      </main>
      <Attribution />
    </>
  );
}
