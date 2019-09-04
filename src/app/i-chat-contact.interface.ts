export interface IChatContact {
  id: number;
  name: string;
  color: string;
  messages: Message[];
  lastMessageTime: Date;
}

export interface Message {
  self: boolean;
  text: string;
}
