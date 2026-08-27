import { Backdrop, BookingIntro } from "@/components";
import { Attribution } from "@/components/layout";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center gap-16 px-8 py-16 lg:flex-row lg:gap-31.25">
        <div className="relative shrink-0">
          <Backdrop />
          <div className="relative h-126.25 w-61.75 rounded-phone bg-white shadow-phone" />
        </div>
        <BookingIntro />
      </main>
      <Attribution />
    </>
  );
}
