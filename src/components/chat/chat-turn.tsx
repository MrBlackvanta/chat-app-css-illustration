import type { ReactNode } from "react";

import { speakers, type Speaker } from "./speakers";

const alignment: Record<Speaker, string> = {
  walker: "items-start",
  owner: "items-end",
};

export default function ChatTurn({
  from,
  children,
}: {
  from: Speaker;
  children: ReactNode;
}) {
  return (
    <li data-from={from} className={`flex flex-col gap-2 ${alignment[from]}`}>
      <span className="sr-only">{speakers[from]}:</span>
      {children}
    </li>
  );
}
