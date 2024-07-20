import React from "react";
import { useState } from "react";
function Profile() {
  
  const [profile, setProfile] = useState("");
  const [data, setData] = useState("");
  const [repo, setrepo] = useState([]);
  // const listrepo = repo.slice(1, 5);

  const githubAPI = async () => {
    if (profile == "") {
      alert("Please enter the user profile ...");
    } else {
      const [profileResponse, repoResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${profile}`),
        fetch(`https://api.github.com/users/${profile}/repos`),
      ]);
      const profileData = await profileResponse.json();
      const repoDatas = await repoResponse.json();
      console.log(profileData);
      console.log(repoDatas);
      if (repoDatas && repoDatas.length > 0) {
        setData(profileData);
        setrepo(repoDatas.slice(1, 5));
      } else {
        alert("Please enter the correct  user profile ...");
      }
    }
  };
  // if (repo == "") {
  //
  // } else {
  //   const val = repo.slice(1, 5);
  //   setListrepo(val);
  // }

  return (
    <>
      <h1 className=" text-3xl font-bold">Github Profile</h1>
      <input
        type="text"
        placeholder="Enter your profile"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        className=" p-2  md:pr-44 m-5 border-2 bg-neutral-900 border-zinc-600  rounded-2xl"
      />
      <button
        onClick={githubAPI}
        className="py-2 px-5 border-2 bg-slate-200 rounded-3xl text-zinc-900"
      >
        search
      </button>
      <div className=" md:flex  md:justify-evenly pt-5 ">
        <div className=" md:w-64 h-full">
          <div className="flex justify-center">
            <img
              src={data.avatar_url}
              alt=" "
              className=" h-60 w-60 rounded-full m-5  items-center"
            />
          </div>
          <h1 className="text-3xl font-bold py-2">{data.name}</h1>
          <h2 className="sm:px-20 md:px-0 ">{data.bio}</h2>
        </div>
        <div className="md:w-1/2 h-full py-10 md:px-20 text-start">
          {repo.map((repo) => (
            <div
              className=" text-xl py-1 px-5 bg-zinc-700 rounded-xl m-1 "
              key={repo.id}
            >
              <h2 className="font-bold ">{repo.name}</h2>
              <p className=" text-sm ">{repo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
