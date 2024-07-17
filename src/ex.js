import React from "react";
import { useEffect, useState } from "react";
function Profile() {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const [Img, setImg] = useState(null);
  const [bio, setBio] = useState(null);
  const [pro1, setPro1] = useState("");
  const [pro2, setPro2] = useState("");
  const [pro3, setPro3] = useState("");
  const [pro4, setPro4] = useState("");
  let apicall = () => {
    fetch(`https://api.github.com/users/${profile}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.repos_url);
        setImg(data.avatar_url);
        setBio(data.bio);
        setName(data.name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // fetch(data)
  // .then((response) => response.json())
  // .then((e) => {
  //     setPro1(e[1].name);
  //     // e[1].description;
  //     setPro2(e[2].name);
  //     setPro3(e[3].name);
  //     setPro4(e[4].name);
  //   });
  console.log(data);
  return (
    <>
      <h1 className=" text-3xl font-bold">Github Profile</h1>
      <input
        type="text"
        placeholder="Enter your profile"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        className=" p-2 pr-44 m-5 border-2 bg-neutral-900 border-zinc-600  rounded-2xl"
      />
      <button
        onClick={apicall}
        className="py-2 px-5 border-2 bg-slate-200 rounded-3xl text-zinc-900"
      >
        search
      </button>
      <div className=" flex  justify-evenly">
        <div className="w-60  h-full pt-5 ">
          <img
            src={Img}
            alt=""
            className=" h-52 w-52 rounded-full bg-zinc-600"
          />
          <h1 className="text-3xl font-bold py-2">{name}</h1>
          <h2>{bio}</h2>
        </div>
        <div className="w-1/2 h-full px-20 py-10  ">
          <div className="text-2xl font-bold  py-5 bg-zinc-600 rounded-xl m-1 ">
            {pro1}
          </div>
          <div className="text-2xl font-bold py-5 bg-zinc-600 rounded-xl m-1">
            {pro2}
          </div>
          <div className="text-2xl font-bold  py-5 bg-zinc-600 rounded-xl m-1">
            {pro3}
          </div>
          <div className="text-2xl font-bold  py-5 bg-zinc-600 rounded-xl m-1">
            {pro4}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
