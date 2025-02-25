import { useState } from "react"

export default function Filter(){

    const [status, changeStatus]= useState('Popular')
    const filterCatrgoryes = ['Popular', 'Novelty', 'Featured', 'Short films']
    return (
        <div className="filter">
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
        <div className="filter__buttons">
          <button>Movies</button>
          <button>Cinema</button>
          <button>Adventure</button>
          <button>Comedy</button>
          <button>Fantasy</button>
          <button>History</button>
          <button>Cartoon</button>
          <button>Detective</button>
          <button>Mysticism</button>
          <button>Drama</button>
        </div>
        <div className="filter__search">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    )
}