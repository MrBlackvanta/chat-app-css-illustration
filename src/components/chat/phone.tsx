import ChatHeader from "./chat-header";

export default function Phone() {
  return (
    <section
      aria-label="Sample chat with a dog walker"
      className="relative h-126.25 w-61.75 rounded-phone bg-white py-2.75 shadow-phone"
    >
      <div className="mx-auto flex h-full w-57 flex-col overflow-clip rounded-screen bg-app">
        <ChatHeader />
      </div>
      <div className="absolute inset-x-0 top-0 mx-auto h-7.25 w-32.25 rounded-b-notch bg-white" />
    </section>
  );
}
