// fetch all meals
export const fetchMeals = async () => {
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        const data = await res.json();
        return data?.meals || [];
    }catch(e){
        console.error(e);
        return [];
    }
}

const Meals = async() => {
    // meals
    const meals = await fetchMeals();
    // console.log(meals);

    return (
        <div className={`meals`}>
            <div className={`container mx-auto w-full px-6 lg:px-8 py-8`}>
                <h1 className={`text-center text-slate-700 text-2xl font-medium`}>Meals</h1>

                <div className={`mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
                    {
                        meals?.map((meal, index) => {
                            return (
                                <div className={`border border-gray-300 rounded p-2 hover:shadow-md hover:cursor-pointer`}>
                                    <p>Single meal</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Meals;