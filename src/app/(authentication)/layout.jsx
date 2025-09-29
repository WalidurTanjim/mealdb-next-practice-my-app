const AuthPagesLayout = ({children}) => {
    return (
        <div className={`grid grid-cols-12`}>
            <div className={`side_nav col-span-3 h-screen bg-cyan-500 pt-8`}>
                <h1 className={`text-center text-2xl text-slate-700 font-medium`}>Side Navigation</h1>
            </div>

            <div className={`col-span-9`}>
                {children}
            </div>
        </div>
    );
};

export default AuthPagesLayout;