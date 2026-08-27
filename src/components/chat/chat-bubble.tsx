import type { ReactNode } from "react";

export default function ChatBubble({ children }: { children: ReactNode }) {
  return <p className="v-bubble">{children}</p>;
}
