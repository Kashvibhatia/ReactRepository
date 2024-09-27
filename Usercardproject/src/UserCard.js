// src/UserCard.js
import React from 'react';
import './UserCard.css'; // Import the CSS for styling

const UserCard = ({ user }) => {
    return (
        <div className="card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserCard;
