import { Dispatch, SetStateAction } from "react";

type TSendMessageField = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  handleSendMessage: () => void;
};

const SendMessageField = ({ message, setMessage, handleSendMessage }: TSendMessageField) => {
  return (
    <div className="px-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update message state
        />
        <button className="btn custom-primary-btn w-24" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default SendMessageField;
