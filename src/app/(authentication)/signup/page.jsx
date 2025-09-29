import Link from "next/link";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
    return (
        <div className='signin'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Sign up page</h1>

                <div className="my-8">
                    <SignUpForm />
                </div>

                <div className="text-center">
                    <h1 className="text-sm text-gray-500">Already have an account? <Link href={`/signin`} className="text-blue-500 hover:text-blue-400 active:text-blue-500 font-medium">Sign in</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default SignUp;