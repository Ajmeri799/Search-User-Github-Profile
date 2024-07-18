import React from "react";
import { useState } from "react";
function Profile() {
  const [profile, setProfile] = useState("");
  const [data, setData] = useState("");
  const [repo, setrepo] = useState([]);
  const listRepos = repo.slice(1, 4);
  const apiCalls = async () => {
    const [response1, response2] = await Promise.all([
      fetch(`https://api.github.com/users/${profile}`),
      fetch(`https://api.github.com/users/${profile}/repos`),
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    setData(data1);
    setrepo(data2);
  };
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
          {listRepos.map((repo) => (
            <div
              className="text-xl font-bold  py-5 bg-zinc-600 rounded-xl m-1 "
              key={repo.id}
            >
              {repo.name}
              <h3>{repo.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
