import React, { useEffect, useState } from "react";
import styles from "../_css/cards.module.css";

function Cards() {

    const [movies, setMovies] = useState([]);

    useEffect(async () => {

        const responseMovies = await fetch(`http://127.0.0.1:8000/movies/`);
        const dataMovies = await responseMovies.json();

        setMovies(dataMovies);

    });

    return (

        <div className={styles.container}>

            <div >

                {movies.map((item) => {

                    return (

                        <div className={styles.card}>
                            Nome: {item.name} <br />
                            Categoria: {item.categoryFK} <br />
                        </div>

                    );

                })}

            </div>


        </div>
    );


}

export default Cards;