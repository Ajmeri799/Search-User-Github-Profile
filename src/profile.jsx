import React from "react";
import { useEffect, useState } from "react";
function Profile() {
  const [profile, setProfile] = useState("");
  const [data, setData] = useState("");
  const [repoUrl, setrepoUrl] = useState(null);
  const [repo, setrepo] = useState([]);
  const apiCalls = () => {
    fetch(`https://api.github.com/users/${profile}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setrepoUrl(data.repos_url);
      });
    fetch(repoUrl)
      .then((response) => response.json())
      .then((repos) => {
        setrepo(repos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // console.log(repoUrl);
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
        onClick={apiCalls}
        className="py-2 px-5 border-2 bg-slate-200 rounded-3xl text-zinc-900"
      >
        search
      </button>
      <div className=" flex  justify-evenly">
        <div className="w-60  h-full pt-5 ">
          <img
            src={data.avatar_url}
            alt=" "
            className=" h-52 w-52 rounded-full "
          />
          <h1 className="text-3xl font-bold py-2">{data.name}</h1>
          <h2>{data.bio}</h2>
        </div>
        <div className="w-1/2 h-full px-20 py-10">
          {repo.map((repo) => (
            <div
              className="text-xl font-bold  py-5 bg-zinc-600 rounded-xl m-1 "
              key={repo.id}
            >
              {repo.name}
              <h3>{repo.description}</h3>
            </div>
          ))}
        </div>
        {/* <div className="w-1/2 h-full px-20 py-10">
          <div className="text-xl font-bold  py-5 bg-zinc-600 rounded-xl m-1 ">
            {repo[1].name}
            <h3>{repo[1].description}</h3>
          </div>
          <div className="text-xl font-bold  py-5 bg-zinc-600 rounded-xl m-1 ">
            {repo[2].name}
            <h3>{repo[2].description}</h3>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Profile;
