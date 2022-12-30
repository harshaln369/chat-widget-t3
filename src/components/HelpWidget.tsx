import { useState } from "react";

type TMessage = {
  message: string;
  id: string;
  sender: string;
};
export const HelpWidget = () => {
  const [senderId, setSenderId] = useState("0");
  const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
  const [messages, setMessages] = useState<TMessage[]>([
    {
      message: "Hello, How can I help you today?",
      id: "asdfyouaosifdhaj",
      sender: "0",
    },
    {
      message: "I need help fixing my computer",
      id: "asdfnfkasdkfhalsdflaj",
      sender: "1",
    },
    {
      message: "I need help fixing my computer",
      id: "asdfnfkasdkfhalsdflaj",
      sender: "0",
    },
    {
      message: "I need help fixing my computer",
      id: "asdfnfkasdkfhalsdflaj",
      sender: "1",
    },
    {
      message: "I need help fixing my computer",
      id: "asdfnfkasdkfhalsdflaj",
      sender: "1",
    },
    {
      message: "I need help fixing my computer",
      id: "asdfnfkasdkfhalsdflaj",
      sender: "0",
    },
  ]);
  return isChatPanelDisplayed ? (
    <div className="fixed bottom-10 flex h-96 flex-col justify-between bg-white p-6">
      <button
        className="absolute top-2 right-2 hover:text-red-400"
        onClick={() => setIsChatPanelDisplayed(false)}
      >
        X
      </button>
      <ul>
        {messages.map(({ message, id, sender }) => (
          <li
            key={id}
            className={`${
              sender === senderId ? "bg-gray-50" : "bg-blue-200"
            } mb-2 rounded p-1`}
          >
            {message}
          </li>
        ))}
      </ul>
      <form className="flex">
        <input className="w-full border border-gray-800 p-1 px-2"></input>
        <button className="cursor-pointer bg-blue-400 p-2 px-4 text-white hover:bg-blue-500">
          Send
        </button>
      </form>
    </div>
  ) : (
    <button
      className="fixed bottom-10 right-10 cursor-pointer bg-blue-400 p-2 px-4 text-white hover:bg-blue-500"
      onClick={() => setIsChatPanelDisplayed(true)}
    >
      Speak to our support team
    </button>
  );
};
