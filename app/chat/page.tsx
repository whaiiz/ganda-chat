'use client';

import React, { useEffect, useState } from 'react'
import MessageList from '../components/MessagesList';
import MessageSend from '../components/MessageSend';

interface ChatProps {

}

const Chat: React.FC<ChatProps> = (chatProps) => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const messagesJson: Message[] = [
      {
        messageId: "1",
        content: "boas",
        username: "whaiiz"
      },      
      {
        messageId: "2",
        content: "olá",
        username: "jaime"
      }
    ];
      
    setMessages(messagesJson);

  }, []);

  const sendMessage = (message: Message): void => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  return (
    <>
      <MessageList messages={messages}/>
      <MessageSend sendMessage={sendMessage} />
    </>
  )
}

export default Chat;