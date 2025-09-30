import { signIn } from "next-auth/react"

const SocialSignIn = () => {
    const socialSignInHandler = async(providerName) => {
        const result = await signIn(providerName, { redirect: false })
        // console.log("Social signin provider name & result:", providerName, result);
    }

    return (
        <div className="socialSignIn">
            <div className="w-full py-8 flex gap-5 items-center justify-center">
                <p className="px-5 py-1.5 border border-gray-300 rounded hover:bg-gray-100 active:bg-transparent cursor-pointer text-sm text-slate-700 font-medium" onClick={() => socialSignInHandler("google")}>Google</p>
                <p className="px-5 py-1.5 border border-gray-300 rounded hover:bg-gray-100 active:bg-transparent cursor-pointer text-sm text-slate-700 font-medium" onClick={() => socialSignInHandler("github")}>Github</p>
            </div>
        </div>
    );
};

export default SocialSignIn;