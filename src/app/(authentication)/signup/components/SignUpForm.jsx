"use client";

import signupUser from "@/app/actions/auth/signupUser";
import { useState } from "react";

const SignUpForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        const role = "user";
        const badge = "bronze";

        if(confirm_password !== password) {
            alert("both password not same");
            return
        }

        const payload = { username, email, password, confirm_password, role, badge };
        // console.log(payload);
        try{
            const res = await signupUser(payload);
            
            if(res?.insertedId){
                form.reset();
                alert("User added successfully")
            }

            if(res?.success == false){
                alert(res?.message);
            }
        }catch(err){
            console.error(err);
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="username mb-3">
                <h1 className="text-sm font-medium text-slate-700 mb-1">Username:</h1>
                <input type="text" name="username" id="username" autoComplete="off" required placeholder="Full name" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded px-4 py-1 text-gray-700" />
            </div>

            <div className="email mb-3">
                <h1 className="text-sm font-medium text-slate-700 mb-1">Email address:</h1>
                <input type="email" name="email" id="email" autoComplete="off" required placeholder="Email address" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded px-4 py-1 text-gray-700" />
            </div>

            <div className="password mb-3">
                <h1 className="text-sm font-medium text-slate-700 mb-1">Create password:</h1>
                <input type="text" name="password" id="password" autoComplete="off" required placeholder="Create password" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded px-4 py-1 text-gray-700" />
            </div>

            <div className="confirm_password mb-3">
                <h1 className="text-sm font-medium text-slate-700 mb-1">Confirm password:</h1>
                <input type="text" name="confirm_password" id="confirm_password" autoComplete="off" required placeholder="Confirm password" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded px-4 py-1 text-gray-700" />
            </div>

            <button type="submit" className={`w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded hover:bg-gray-100 active:bg-transparent font-medium px-4 py-1 mt-3 text-gray-700 text-center ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}>{loading ? "Pending..." : "Sign up"}</button>
        </form>
    );
};

export default SignUpForm;