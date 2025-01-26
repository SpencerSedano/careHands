import SignUpImage from "../assets/img/signup.jpg";
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
            const response = await fetch(
                "http://localhost:5068/api/CreateAccount",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(worker),
                },
            );
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
            {/* First Container */}
            <div className="mt-2 flex h-dvh w-full justify-center justify-self-center rounded-3xl bg-gray-50 p-6 sm:w-11/12">
                {/* First Container Grid */}
                <div className="grid h-full w-full grid-cols-4 grid-rows-6 gap-1">
                    {/* Form Container */}
                    <div className="col-span-2 col-start-1 row-span-6 row-start-1 flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold">
                            Create an account
                        </h1>
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
                                onChange={(e) =>
                                    setNewId(Number(e.target.value))
                                }
                            />
                            <input
                                className="p-4"
                                type="text"
                                name="worker[workerId]"
                                placeholder="ID"
                                required
                                value={workerId}
                                onChange={(e) =>
                                    setWorkerId(Number(e.target.value))
                                }
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
                            <button className="mt-2 border p-4" type="submit">
                                Create account
                            </button>
                        </form>
                    </div>
                    {/* Image Container */}
                    <div className="col-span-2 col-start-3 h-full w-full">
                        <img
                            src={SignUpImage}
                            alt="Signup"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
