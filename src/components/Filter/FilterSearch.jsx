import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { filterMovies } from "../../Redux/slices/moviesSlice";



export default function FilterSearch(){
  
  
  const [search, setSeach] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() =>
      dispatch(filterMovies(search)),1000);
    return () => clearTimeout(handler);
  },[dispatch, search])

  return (
        <div className="filter__search">
        <input type="text" value={search} onChange={(e) =>setSeach(e.target.value)} placeholder="Search..." />
        <button>
          <i className="fa fa-search" />
        </button>
      </div>
    )
}