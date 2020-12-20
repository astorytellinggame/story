import { useEffect, useState } from "react";
import Client from "./client/Client";

function App() {
  const [status, setStatus] = useState("unknown");

  useEffect(() => {
    const c = new Client();
    c.subscribe((client) => {
      setStatus(client.status);
    });
    c.connect();
    return c.close.bind(c);
  }, []);

  return (
    <>
      <header className="px-4 py-2 bg-blue-200">
        <a href="/" className="text-blue-800 font-medium">
          A Storytelling Game
        </a>
      </header>
      <main className="px-4 py-2">
        Main content
        <p>Client status: {status}</p>
      </main>
    </>
  );
}

export default App;
