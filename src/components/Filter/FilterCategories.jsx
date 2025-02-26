import { useState } from "react"

export default function FilterCategories(){
    const [status, changeStatus]= useState('Popular')
    const filterCatrgoryes = ['Popular', 'Novelty', 'Featured', 'Short films']

    return (
        <div id="categoryes" className="filter__categoryes anchor">
        <div className="filter__categoryes-flex">
          { filterCatrgoryes.map ((category, index) =>(
          <div key={index}
            onClick= {() => changeStatus(category)}
            className={`filter__categoryes-item ${category === status? 'active-category':''}`}
          >
            <p>{ category }</p>
            <span />
          </div>

          ))}
        </div>
        <span />
      </div>
    )
}