'use client'
import React, { useState, ChangeEvent } from 'react';

interface MessageSendProps {
  sendMessage: (message: Message) => void
}

const MessageSend: React.FC<MessageSendProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>('');

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    const newMessage: Message = {
      messageId: '',
      content: message,
      username: 'whaiiz',
    }

    sendMessage(newMessage);
  }

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default MessageSend