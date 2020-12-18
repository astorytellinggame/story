import { useEffect, useState } from "react";
import Client from "./client/Client";

function App() {
  const [client, setClient] = useState();

  useEffect(() => {
    const c = new Client();
    (async () => {
      await c.connect();
      setClient(c);
    })();
  }, []);

  return (
    <>
      <header className="px-4 py-2 bg-blue-200">
        <a href="/" className="text-blue-800 font-medium">A Storytelling Game</a>
      </header>
      <main className="px-4 py-2">
        Main content
        <p>
          Client connected: {!!client ? 'true' : 'false'}
        </p>
      </main>
    </>
  );
}

export default App;
