import Link from "next/link";
import SignInForm from "./components/SignInForm";

const SignIn = () => {
    return (
        <div className='signin'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Sign in page</h1>

                <div className="my-8">
                    <SignInForm />
                </div>

                <div className="text-center">
                    <h1 className="text-sm text-gray-500">Dont have an account? <Link href={`/signup`} className="text-blue-500 hover:text-blue-400 active:text-blue-500 font-medium">Sign up</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default SignIn;