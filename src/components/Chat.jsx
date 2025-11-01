import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { createSocketConnection } from "../utils/socket"
import { useSelector } from "react-redux"
import EmojiPicker from 'emoji-picker-react';
import { Base_URL } from "../utils/constants";
import axios from 'axios'


const Chat = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [newMessage, setNewMessage] = useState([])
    const [message, setMessage] = useState("")
    const { id: targetUserId } = useParams();
    const [socket, setSocket] = useState(null);
    const user = useSelector((store) => store.user) || []
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (!user) return;

        const newSocket = createSocketConnection();
        setSocket(newSocket);

        newSocket.emit("joinChat", {
            firstName: user.firstName,
            userId: user._id,
            targetUser: targetUserId
        });

        newSocket.on("messageRecieved", ({ firstName, lastName, text, createdAt }) => {
            setNewMessage((prev) => [...prev,
            {
                firstName,
                lastName: lastName || "",
                text,
                createdAt
            }]);
        });

        return () => newSocket.disconnect();
    }, [user?._id, targetUserId]);


    const handleSendMessage = () => {
        if (!socket || !message.trim()) return;

        const newMsg = {
            firstName: user.firstName,
            lastName: user.lastName || "",
            userId: user._id,
            targetUserId,
            text: message,
            createdAt: new Date().toISOString()
        };

        socket.emit("sendMessage", newMsg);
        setMessage("");
    }

    const handleEmojiClick = (emojiObject) => {
        setMessage(message + emojiObject.emoji);
    }

    const fetchChat = async () => {
        const chat = await axios.get(Base_URL + "/chat/" + targetUserId,
            { withCredentials: true })
        console.log(chat.data.messages)
        const chatMessages = chat?.data?.messages.map((msg) => {
            const { senderId, text, createdAt } = msg
            return {
                firstName: senderId?.firstName,
                lastName: senderId?.lastName,
                text,
                createdAt: createdAt ? new Date(createdAt).toISOString() : new Date().toISOString(),
            }
        })
        setNewMessage(chatMessages)
    }
    useEffect(() => {
        fetchChat()
    }, [])

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [newMessage]);

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10 h-[80vh] px-3 sm:px-6">

                {/* Chat Header */}
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-gray-800 text-white rounded-t-2xl border border-gray-500 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">
                                {(() => {
                                    const targetUser = newMessage.find(
                                        (msg) => msg.firstName !== user.firstName
                                    );
                                    return targetUser
                                        ? `${targetUser.firstName} ${targetUser.lastName || ""}`
                                        : "Chat";
                                })()}
                            </h2>
                            <p className="text-xs text-gray-400">Online</p>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div
                    ref={chatContainerRef}
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 border-t border-l border-r border-gray-500 p-4 h-[65vh] overflow-y-auto bg-gray-900"
                >
                    {newMessage.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex flex-col mb-3 ${msg.firstName === user.firstName ? "items-end" : "items-start"
                                }`}
                        >
                            <div
                                className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl text-white ${msg.firstName === user.firstName
                                        ? "bg-blue-600 rounded-br-none"
                                        : "bg-gray-700 rounded-bl-none"
                                    }`}
                            >
                                <div className="text-sm font-semibold mb-1">
                                  
                                </div>
                                <div className="text-sm">{msg.text}</div>
                            </div>
                            
                            <div className="text-xs opacity-60 mt-1">
                                {new Date(msg.createdAt).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/*Message Input */}
                <form
                    className="border-b border-l border-r w-full sm:w-3/4 md:w-2/3 lg:w-1/3 border-gray-500 p-4 relative bg-gray-900 rounded-b-2xl"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="flex items-center">
                        <input
                            value={message}
                            type="text"
                            className="w-full sm:w-3/4 border bg-gray-800 border-gray-500 h-10 p-2 mr-3 rounded-2xl text-white focus:outline-none"
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
    );

}

export default Chat
