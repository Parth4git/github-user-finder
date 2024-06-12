import React, { useEffect, useState } from "react";
import Users from "./users";
import "./style.css";

const GitHubFinder = () => {
  const [userName, setUserName] = useState("Parth4git");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUser() {
    setLoading(true); // Start loading
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setLoading(false); // End loading

    if (data) {
      setUserData(data);
      setUserName("");
    }
  }

  function handleClick() {
    if (userName.trim()) {
      fetchGithubUser();
    }
  }

  useEffect(() => {
    fetchGithubUser();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>GitHub Finder</h1>
        <input
          type="text"
          className="search"
          placeholder="Enter username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleClick} className="btn">
          Search
        </button>
      </div>

      {loading ? (
        <div>
          <p>Loading... </p>
        </div>
      ) : (
        <div>{userData ? <Users userData={userData} /> : null}</div>
      )}
    </div>
  );
};

export default GitHubFinder;
