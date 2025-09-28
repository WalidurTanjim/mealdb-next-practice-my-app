"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
    const [search, setSearch] = useState('');
    // console.log(search);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const searchQuery = { search };
        const urlSearchParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlSearchParams}`;
        router.push(url);
    }, [search]);

    return (
        <div className={`mealSearchInput mt-8`}>
            <input type="search" name="searchMeal" id="searchMeal" autoComplete="off" placeholder="Search meal" onChange={e => setSearch(e.target.value)} className={`w-full px-5 py-1 border border-gray-300 focus:ring-3 ring-gray-100 outline-none rounded text-slate-600`} />
        </div>
    );
};

export default MealSearchInput;