import Image from "next/image";
import Link from "next/link";

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
                            {/* console.log("Single meal:", meal); */}

                            return (
                                <div key={meal?.idMeal} className={`border border-gray-300 rounded p-2 hover:shadow-md hover:cursor-pointer`}>
                                    <Image src={meal?.strMealThumb} width={150} height={175} alt={meal?.strMeal} className={`w-full h-[125px] rounded`} />

                                    <div className={`mt-3`}>
                                        <h1 className={`text-lg text-slate-700 font-medium`}>{meal?.strMeal}</h1>
                                        <p className={`text-sm text-gray-500 my-1`}>{meal?.strInstructions.slice(0, 150)}...</p>
                                        <Link href={`/meals/${meal?.idMeal}`}><button className={`px-5 py-1 text-sm text-slate-700 border border-gray-300 rounded outline-none hover:bg-gray-100 active:bg-transparent`}>Show details</button></Link>
                                    </div>
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