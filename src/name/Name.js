import { useState } from "react";

export default function Name(props) {
  const [name, setName] = useState("");

  return (
    <div>
      <label className="block text-gray-700" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="e.g. Harry Potter"
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white bg-white rounded shadow focus:ring-2 focus:ring-blue-600"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
    </div>
  );
}
