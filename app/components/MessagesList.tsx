'use client'
import React from 'react'

interface MessageListProps {
  messages: Message[]
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesList =  messages.map(({ content, username}) => {

    return (
      <div key={crypto.randomUUID()}>
        <label>{username}:{content}</label>
      </div>
    );
  })

  return (
    <>
      { messagesList }
    </>
  )
}

export default MessageList