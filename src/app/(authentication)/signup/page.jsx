import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
    return (
        <div className='signin'>
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className='text-center text-2xl text-slate-700 font-medium'>Sign up page</h1>

                <div className="mt-8">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default SignUp;