import { useState } from "react";

const AddMovie = ({addMovie}) => {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        posterUrl: "",
        rating: 0,
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setMovie((prev) => {
            return({
                ...prev, 
                [name]: value

            })
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        addMovie(movie)
    } 

    return(
        <form style={{marginTop: "20px", marginBottom: "20px", display: "flex", width: "80vw", justifyContent: "space-around", flexWrap: "wrap", gap: "10px"}}>
            <h3 style={{width: "60%", height: "3rem", fontSize: "24px", textAlign: "center"}}>Add Movie</h3>
            <input type="text" value={movie.title} onChange = {handleChange} id="title" name="title" placeholder="Title" style={{width: "60%", height: "3rem", fontSize: "24px", textAlign: "center"}} />
            <input type="text"  value={movie.posterUrl} onChange = {((event) => handleChange(event))} id="posterURL" name="posterUrl" placeholder="Poster" style={{width: "60%", height: "3rem", fontSize: "24px", textAlign: "center"}}/>
            <input type="text"  value={movie.description} onChange = {((event) => handleChange(event))} id="description" name="description" style={{width: "60%", height: "3rem", fontSize: "24px", textAlign: "center"}}/>
            <input type="number"  value={movie.rating} onChange = {((event) => handleChange(event))} id="rating" name="rating" style={{width: "60%", height: "3rem", fontSize: "24px", textAlign: "center"}}/>
            <button type="submit" onClick={handleSubmit} style={{width: "40%", height: "3rem", fontSize: "24px", textAlign: "center"}}>Submit</button>
        </form>
    )
};

export default AddMovie;