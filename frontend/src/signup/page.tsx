import Navbar from "../components/Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="flex h-dvh w-full items-center justify-center">
        <form className="flex min-h-96 w-150 flex-col items-center justify-center rounded-md border-2 p-2">
          <h2 className="m-2 text-4xl">Sign up</h2>
          <p className="flex-wrap text-center text-sm">
            Caring with your heart, mind, and hands. <br /> Let us help organize
            to deliver better results
          </p>
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Id Letter"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Your ID Number"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Age"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Email"
          />
          <label>
            Choose a role:
            <select name="role" id="role">
              <optgroup label="Worker">
                <option value="caregiver">Caregiver</option>
                <option value="worker">Worker</option>
              </optgroup>
              <optgroup label="Admin">
                <option value="supervisor">Supervisor</option>
                <option value="manager">Manager</option>
                <option value="admin">Administrator</option>
              </optgroup>
            </select>
          </label>

          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            className="m-2 w-48 border-b-2 p-2 outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="bg-darkbrown m-4 w-48 cursor-pointer rounded-md p-6 text-white">
            New Account
          </button>
        </form>
      </div>
    </>
  );
}
