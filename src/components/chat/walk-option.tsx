export default function WalkOption({
  duration,
  price,
}: {
  duration: string;
  price: string;
}) {
  return (
    <p className="flex w-40 items-center gap-2 rounded-bubble rounded-bl-tail v-brand-option py-2.5 pr-4 pl-2 text-chat text-white shadow-raised">
      <span className="size-3 shrink-0 rounded-full border border-radio" />
      {duration}
      <span className="ml-auto text-price font-bold">{price}</span>
    </p>
  );
}
