import { Base_URL } from "./constants"
import io from "socket.io-client"

export const createSocketConnection = () => {
    return io(Base_URL)
}