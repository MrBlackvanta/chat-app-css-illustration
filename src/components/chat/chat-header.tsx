import avatar from "@/assets/avatar.webp";

export default function ChatHeader() {
  return (
    <header className="flex items-center gap-2 rounded-b-band v-brand-band px-4 pt-7.5 pb-3">
      <span className="h-2.5 w-1 bg-white v-chevron" />
      <img
        src={avatar.src}
        alt=""
        width={24}
        height={24}
        className="size-6 rounded-full border border-white"
      />
      <div className="mr-auto">
        <p className="text-name font-medium text-white">Samuel Green</p>
        <p className="mt-0.5 text-status text-presence">Available to Walk</p>
      </div>
      <span className="flex flex-col gap-px">
        <span className="size-0.5 rounded-full bg-white" />
        <span className="size-0.5 rounded-full bg-white" />
        <span className="size-0.5 rounded-full bg-white" />
      </span>
    </header>
  );
}
