import Rating from "./Rating"

export default function MovieLeft(props){
    
    const dataFilm = props.filmInfo.film;
    console.log(dataFilm)
    return (
        <div className="main__info-left">
            <div className="main__info-left-title">
                <p> {dataFilm.title} </p>
                <Rating />
            </div>
            <div className="main__info-left-categoryes">
                {dataFilm.categoryes.map((value,index) => (
                    <>
                    <p key = { index } > { value } </p>
                    </>
                ))
                
                }
            </div>
            <div className="main__info-left-about">
                <p>Description</p>
                <p> 
                    {
                        dataFilm.description
                    } 
                </p>
            </div>
        </div>
    );
}