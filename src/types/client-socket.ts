import { Socket } from "socket.io-client";

interface ServerToClientEvents {
    "receive-changes": (data: { delta: any }) => void;
    "load-document": (data: { document: any }) => void;
}

interface ClientToServerEvents {
    "send-changes": (data: { delta: any }) => void;
    "get-document": (data: { documentId: string }) => void;
    "save-document": (data: { document: any }) => void;
}

type UtilSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export default UtilSocket;
