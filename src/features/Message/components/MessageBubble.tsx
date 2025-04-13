type TMessageBubble = {
  msg: string;
};

const MessageBubble = ({ msg }: TMessageBubble) => {
  return (
    <div className="flex items-start space-x-2">
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
  );
};

export default MessageBubble;
