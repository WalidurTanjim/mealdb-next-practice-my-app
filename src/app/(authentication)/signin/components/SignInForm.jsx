"use client";

const SignInForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const payload = { email, password };
        console.log(payload);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="email mb-3">
                <h1 className="text-sm font-medium text-slate-700 mb-1">Email address:</h1>
                <input type="email" name="email" id="email" autoComplete="off" required placeholder="Email address" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded px-4 py-1 text-gray-700" />
            </div>

            <div className="password mb-3">
                <h1 className="text-sm font-medium text-slate-700 mb-1">Create password:</h1>
                <input type="text" name="password" id="password" autoComplete="off" required placeholder="Create password" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded px-4 py-1 text-gray-700" />
            </div>

            <button type="submit" className="w-full border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded hover:bg-gray-100 active:bg-transparent font-medium px-4 py-1 mt-3 text-gray-700 text-center">Sign up</button>
        </form>
    );
};

export default SignInForm;