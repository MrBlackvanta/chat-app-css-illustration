export default function MessageInput() {
  return (
    <p
      aria-hidden="true"
      className="flex h-8.5 items-center rounded-full bg-white pr-1.25 pl-5 text-input tracking-input text-placeholder"
    >
      Type a message…
      <span className="ml-auto grid size-6 place-items-center rounded-full bg-ink">
        <span className="h-2.5 w-1.5 -scale-x-100 bg-white v-chevron" />
      </span>
    </p>
  );
}
