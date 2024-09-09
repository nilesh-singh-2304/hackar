import { useChat } from "ai/react";
export const runtime = "experimental-edge";
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-xl py-24 mx-auto stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? (
            <div className="chat chat-end ">
              <div className="chat-bubble chat-bubble-info">{m.content}</div>
            </div>
          ) : (
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-success">{m.content}</div>
            </div>
          )}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded-xl md:ml-20 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
