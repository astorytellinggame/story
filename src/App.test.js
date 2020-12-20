import { act, render, screen, waitFor } from "@testing-library/react";
import Server from "../server/Server";
import App from "./App";

let server;

beforeEach(() => {
  server = new Server();
});

afterEach(() => {
  return act(() => server.close());
});

test("shows banner", async () => {
  render(<App />);
  expect(screen.getByText("A Storytelling Game")).toBeInTheDocument();
});

test("connects to the server", async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/status: connected/));
  const status = screen.getByText(/status: connected/);
  expect(status).toBeInTheDocument();
});

test("fails to connect without server", () => {
  render(<App />);
  const status = screen.getByText(/status: connecting/);
  expect(status).toBeInTheDocument();
});
