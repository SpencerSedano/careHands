"use client";

import Image from "next/image";
import SignUpImage from "../../../public/img/signup.jpg";
import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";

export default function Signup() {
  const [newId, setNewId] = useState<number>(0);
  const [workerId, setWorkerId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const worker = {
      newId,
      workerId,
      name,
      lastname,
      email,
      password,
      phoneNumber,
      address,
      role,
    };

    try {
      const response = await fetch("http://localhost:5068/api/CreateAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(worker),
      });
      if (!response.ok) {
        throw new Error("An error occurred while creating the account");
      }
      const data = await response.json();
      console.log("Success", data);
    } catch {
      console.error("An error occurred while creating the account");
    }
  };

  return (
    <>
      <Navbar />
      {/* First Container */}
      <div className="bg-gray-50 w-full h-dvh sm:w-11/12 p-6 mt-2 rounded-3xl flex justify-center justify-self-center ">
        {/* First Container Grid */}
        <div className="w-full h-full grid grid-cols-4 grid-rows-6 gap-1 ">
          {/* Form Container */}
          <div className="row-start-1 row-span-6 col-start-1 col-span-2 flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold">Create an account</h1>
            <p className="mt-6 mb-6">
              Already have an account?&nbsp;
              <a className="pointer text-sky-500" href="/login">
                Log in
              </a>
            </p>
            <form className="" onSubmit={handleSubmit}>
              <input
                className="p-4"
                type="text"
                name="worker[id]"
                placeholder="Number ID"
                required
                value={newId}
                onChange={(e) => setNewId(Number(e.target.value))}
              />
              <input
                className="p-4"
                type="text"
                name="worker[workerId]"
                placeholder="ID"
                required
                value={workerId}
                onChange={(e) => setWorkerId(Number(e.target.value))}
              />
              <input
                className="p-4"
                type="text"
                name="worker[name]"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-4"
                type="text"
                name="worker[lastname]"
                placeholder="Last name"
                required
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                className="p-4"
                type="email"
                name="worker[email]"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-4"
                type="password"
                name="worker[password]"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="p-4"
                type="number"
                name="worker[phoneNumber]"
                placeholder="Phone number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                className="p-4"
                type="text"
                name="worker[address]"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                className="p-4"
                type="text"
                name="worker[role]"
                placeholder="Role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <button className="p-4 mt-2 border" type="submit">
                Create account
              </button>
            </form>
          </div>
          {/* Image Container */}
          <div className="w-full h-full col-start-3 col-span-2">
            <Image src={SignUpImage} alt="Signup" className="object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
