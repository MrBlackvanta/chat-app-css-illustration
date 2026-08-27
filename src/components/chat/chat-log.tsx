import ChatBubble from "./chat-bubble";
import ChatTurn from "./chat-turn";
import PhotoStrip from "./photo-strip";
import WalkOption from "./walk-option";

export default function ChatLog() {
  return (
    <ol className="flex v-arrival flex-col gap-4">
      <ChatTurn from="walker">
        <ChatBubble>
          That sounds great. I’d be happy to discuss more.
        </ChatBubble>
        <ChatBubble>
          Could you send over some pictures of your dog, please?
        </ChatBubble>
      </ChatTurn>
      <ChatTurn from="owner">
        <PhotoStrip />
        <ChatBubble>Here are a few pictures. She’s a happy girl!</ChatBubble>
        <ChatBubble>Can you make it?</ChatBubble>
      </ChatTurn>
      <ChatTurn from="walker">
        <ChatBubble>
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </ChatBubble>
        <WalkOption duration="30 minute walk" price="$29" />
        <WalkOption duration="1 hour walk" price="$49" />
      </ChatTurn>
    </ol>
  );
}
