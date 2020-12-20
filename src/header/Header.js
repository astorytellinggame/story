import book from "./book.svg";

export default function Header(props) {
  return (
    <header className="px-4 py-2 shadow-md flex justify-between items-center relative z-10">
      <a href="/" className="text-gray-800 font-medium text-xl">
        <img
          src={book}
          aria-hidden="true"
          alt=""
          className="inline h-7 w-7 -my-2 mr-2"
        ></img>
        A Storytelling Game
      </a>
      <span>Client status: {props.status}</span>
    </header>
  );
}
