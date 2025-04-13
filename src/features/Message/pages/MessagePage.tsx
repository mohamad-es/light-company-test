import MessageBubble from "../components/MessageBubble";
import SendMessageField from "../components/SendMessageField";
import { useMessage } from "../hooks/useMessage";

const MessagePage = () => {
  const { handleSendMessage, messages, message, setMessage } = useMessage();

  return (
    <div className="flex flex-col w-full h-[95vh]">
      {/* Chat Header */}
      <div className="flex justify-between items-center p-4 secondary-bg-color text-white">
        <h2 className="text-xl">Chat Room</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-auto space-y-4">
        {/* Render each message */}
        {messages.length  === 0 ? "No chat started." : messages.map((msg) => (
          <MessageBubble msg={msg} key={msg} />
        ))}
      </div>

      {/* Message Input */}
      <SendMessageField setMessage={setMessage} handleSendMessage={handleSendMessage} message={message} />
    </div>
  );
};

export default MessagePage;
