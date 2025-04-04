import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchSortFilteredMovies } from "../../Redux/slices/moviesSlice";


export default function FilterButton(){

    const dispatch = useDispatch();
    const { filmCategory } = useSelector(store => store.movies)
    const [active, changeActive] = useState('Movies')

    function categoryfilteredButton(value){
        changeActive(value);
        dispatch(searchSortFilteredMovies(value));
    }
    return (
        <div className="filter__buttons">
            <button onClick={()=> categoryfilteredButton('All')} className={'All' === active ? 'active' : ''}>All</button>
            {
                filmCategory.map((value, index)=>(
                    <button 
                    key = {index} 
                    className={value === active ? 'active' : ''}
                    onClick={()=> categoryfilteredButton(value)}>
                        { value }
                    </button>

                ))
            }
        
        </div>
    )
}