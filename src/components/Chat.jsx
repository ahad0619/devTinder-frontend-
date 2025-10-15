import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { createSocketConnection } from "../utils/socket"
import { useSelector } from "react-redux"
import EmojiPicker from 'emoji-picker-react';


const Chat = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [newMessage, setNewMessage] = useState([])
    const [message, setMessage] = useState("")
    const { id: targetUserId } = useParams();
    const [socket, setSocket] = useState(null);
    const user = useSelector((store) => store.user) || []
    useEffect(() => {
        if (!user) return;

        const newSocket = createSocketConnection();
        setSocket(newSocket);

        newSocket.emit("joinChat", {
            firstName: user.firstName,
            userId: user._id,
            targetUser: targetUserId
        });

        newSocket.on("messageRecieved", ({ firstName, text }) => {
            setNewMessage((prev) => [...prev, { firstName, text }]);
        });

        return () => newSocket.disconnect();
    }, [user?._id, targetUserId]);

    const handleSendMessage = () => {
        if (!socket) return
        socket.emit("sendMessage", {
            firstName: user.firstName,
            userId: user._id,
            targetUserId,
            text: message
        })
        setMessage("")

    }
    const handleEmojiClick = (emojiObject) => {
        setMessage(message + emojiObject.emoji);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20 h-3/4 ">
                <div className="w-1/4 border-t border-l border-r border-gray-500 p-4 rounded-t-2xl  h-96 overflow-y-auto">
                    {newMessage.map((msg, index) => (
                        <div key={index} className={`chat ${msg.firstName === user.firstName ? 'chat-end' : 'chat-start'}`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Avatar"
                                        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                                    />
                                </div>
                            </div>
                            <div className="chat-header">
                                {msg.firstName}
                                <time className="text-xs opacity-50 ml-2">12:45</time>
                            </div>
                            <div className="chat-bubble">{msg.text}</div>
                        </div>
                    ))}
                </div>


                <form
                    className="border-b border-l border-r w-1/4 border-gray-500 p-4 relative" // make form relative
                    onSubmit={(e) => { e.preventDefault() }}
                >
                    <div className="flex items-center">
                        <input
                            value={message}
                            type="text"
                            className="w-3/4 border bg-gray-800 border-gray-500 h-10 p-2 mr-3 rounded-2xl"
                            onChange={(e) => setMessage(e.target.value)}
                        />

                     
                        <div className="relative">
                            <button
                                type="button"
                                className="text-2xl"
                                onClick={() => setShowPicker(!showPicker)}
                            >
                                😊
                            </button>

                           
                            {showPicker && (
                                <div className="absolute bottom-full left-0 z-50">
                                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary ml-4"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Chat
