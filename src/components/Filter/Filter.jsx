
import FilterButton from "./FilterButton"
import FilterCategories from "./FilterCategories"
import FilterSearch from "./FilterSearch"

export default function Filter(){


    return (
        <div className="filter">
        <FilterCategories />
        <FilterButton />
        <FilterSearch />
      </div>
    )
}