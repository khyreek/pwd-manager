export interface ServerToClientEvents {
    "receive-changes": (data: { delta: any }) => void;
    "load-document": (data: { document: any }) => void;
}

export interface ClientToServerEvents {
    "send-changes": (data: { delta: any }) => void;
    "get-document": (data: { documentId: string }) => void;
    "save-document": (data: { document: any }) => void;
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    recipients: string[];
    message: string;
    sender: string;
}
