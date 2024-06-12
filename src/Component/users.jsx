import React from "react";
import "./style.css";

const Users = ({ userData }) => {
  const {
    avatar_url,
    name,
    bio,
    public_repos,
    followers,
    following,
    created_at,
  } = userData;

  const time = new Date(created_at).toLocaleDateString();

  return (
    <div className="user-info">
      <img src={avatar_url} alt="User avatar" />
      <h1>Name: {name}</h1>
      <h2>Bio: {bio}</h2>
      <h3>Public Repos: {public_repos}</h3>
      <h3>Followers: {followers}</h3>
      <h3>Following: {following}</h3>
      <h3>User Since: {time}</h3>
    </div>
  );
};

export default Users;
