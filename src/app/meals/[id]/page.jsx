import Image from "next/image";

export const fetchSingleMeal = async(id) => {
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data?.meals[0] || {};
    }catch(err){
        console.error(err);
        return {};
    }
}

const Meal = async({ params }) => {
    const { id } = await params;

    // get single meal by id
    const meal = await fetchSingleMeal(id);
    // console.log("Meal:", meal);

    return (
        <div className={`meal`}>
            <div className={`container mx-auto w-full px-6 lg:px-8 py-8`}>
                <h1 className={`text-center text-2xl text-slate-700 font-medium`}>Single Meal</h1>

                <div className={`mt-8`}>
                    <Image src={meal?.strMealThumb} width={1000} height={1000} alt={meal?.strMeal} className={`w-full h-[250px] md:h-[350px] lg:h-[500px] rounded`} />

                    <div className="mt-5">
                        <h1 className={`text-lg text-slate-700 font-medium`}>{meal?.strMeal}</h1>
                        <p className={`text-sm text-slate-600 my-2`}>{meal?.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;