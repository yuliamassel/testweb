import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Sidebar from "../../Component/Sidebar";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        const result = res.data.results[0];
        console.log("ini result", result);
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="profile">
          <Sidebar/>
        <div className="content-profile">
        <img src={`${user.picture.medium}`} alt="" width={50}/>
        <h2>{`${user.name.first}`}</h2>
        <p>{user.phone}</p>
        <h2>{user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
