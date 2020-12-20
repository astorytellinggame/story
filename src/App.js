import { useEffect, useState } from "react";
import Client from "./client/Client";
import Header from "./header/Header";
import Name from "./name/Name";

function App() {
  const [status, setStatus] = useState("unknown");
  const [client, setClient] = useState();

  useEffect(() => {
    const c = new Client();
    c.subscribe((client) => {
      setStatus(client.status);
    });
    c.connect();
    setClient(c);
    return c.close.bind(c);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header status={status}></Header>
      <main className="flex flex-grow items-center justify-center bg-gray-200">
        {status === "connected" && <Name client={client}></Name>}
      </main>
    </div>
  );
}

export default App;
