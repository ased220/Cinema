import { useState } from "react"


export default function FilterButton(){

    const categories = ['Movies', 'Cinema','Adventure','Comedy','Fantasy','History','Cartoon','Detective','Mysticism','Drama']
    const [active, changeActive] = useState('Movies')
    return (
        <div className="filter__buttons">
            {
                categories.map((value, index)=>(
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