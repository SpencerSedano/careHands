import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="flex h-dvh w-full items-center justify-center">
        <form className="flex h-96 w-96 flex-col items-center justify-center rounded-md border-2">
          <input
            className="m-4 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            className="m-4 w-48 border-b-2 p-2 outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="bg-darkbrown m-4 w-48 cursor-pointer rounded-md p-6 text-white">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
