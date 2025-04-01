import { useState } from "react"
import { useSelector } from "react-redux"


export default function FilterButton(){

    const { filmCategory } = useSelector(store => store.movies)
    const [active, changeActive] = useState('Movies')
    return (
        <div className="filter__buttons">
            {
                filmCategory.map((value, index)=>(
                    <button 
                    key = {index} 
                    className={value === active? 'active':''}
                    onClick={()=>changeActive(value )}>
                        { value }
                    </button>

                ))
            }
        
        </div>
    )
}