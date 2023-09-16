import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp } from 'firebase/firestore';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [messageTime, setMessageTime] = useState('');

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  useEffect(() => {
    let timer;

    const updateMessageTime = () => {
      if (message.date instanceof Timestamp) {
        // Convert the Firebase server timestamp to a JavaScript Date object
        const messageDate = message.date.toDate();

        // Get the current date and time
        const currentDate = new Date();

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - messageDate;

        if (timeDifference < 60000) {
          // If the message was sent less than a minute ago, display "Just Now"
          setMessageTime('Just Now');
        } else {
          // Format the message date and time
          const day = String(messageDate.getDate()).padStart(2, '0');
          const month = String(messageDate.getMonth() + 1).padStart(2, '0');
          const year = String(messageDate.getFullYear()).slice(-2);
          const hours = String(messageDate.getHours()).padStart(2, '0');
          const minutes = String(messageDate.getMinutes()).padStart(2, '0');

          setMessageTime(`${day}.${month}.${year} ${hours}:${minutes}`);
        }
      }
    };

    // Initial update
    updateMessageTime();

    // Periodically update the message time (e.g., every minute)
    timer = setInterval(updateMessageTime, 60000);

    return () => {
      clearInterval(timer); // Clear the timer on component unmount
    };
  }, [message.date]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && 'owner'}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{messageTime}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
