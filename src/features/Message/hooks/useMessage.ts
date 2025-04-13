import { useState, useEffect } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (message.trim()) {
      // Add the new message to the messages array
      const newMessages = [...messages, message];
      setMessages(newMessages);

      // Save the updated messages to localStorage
      localStorage.setItem("messages", JSON.stringify(newMessages));

      // Clear the input field
      setMessage("");
    }
  };

  return { handleSendMessage, messages, message, setMessage };
};
