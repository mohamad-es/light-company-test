import { useState } from "react";

const MessagePage = () => {
  // State to store the message input
  const [message, setMessage] = useState<string>("");
  // State to store all messages (only one-way messages)
  const [messages, setMessages] = useState<string[]>([]);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add the new message to the messages array
      setMessages([...messages, message]);
      // Clear the input field
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* Chat Header */}
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h2 className="text-xl">Chat Room</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-auto space-y-4">
        {/* Render each message */}
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="avatar">
              <div className="w-10 rounded-full bg-gray-300"></div>
            </div>
            <div>
              <p className="text-sm font-semibold">User</p>
              <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                <p>{msg}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update message state
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
