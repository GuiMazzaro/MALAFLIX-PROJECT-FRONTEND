import styles from "../_css/ler.module.css";
import React, { useEffect, useState } from "react";


function Read(){

    const [category, setCategory] = useState([]);
    const [signature, setSignature] = useState([]);
    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);
    const [favorite, setFavorite] = useState([]);

    const [name, setName] = useState({
        id : '',
    })

    useEffect( async () =>{

        const responseCategory = await fetch(`http://127.0.0.1:8000/category/`);
        const dataCategory = await responseCategory.json();

        const responseSiganture = await fetch(`http://127.0.0.1:8000/signature/`);
        const dataSignature = await responseSiganture.json();

        const responseUsers = await fetch(`http://127.0.0.1:8000/users/`);
        const dataUsers = await responseUsers.json();

        const responseMovies = await fetch(`http://127.0.0.1:8000/movies/`);
        const dataMovies = await responseMovies.json();

        const responseFavorite = await fetch(`http://127.0.0.1:8000/favorite/`);
        const dataFavorite = await responseFavorite.json();

        setCategory(dataCategory);
        setSignature(dataSignature);
        setUsers(dataUsers);
        setMovies(dataMovies);
        setFavorite(dataFavorite);

        
    }, []);

    function getName(id){

        console.log(id)

        const response = fetch(`http://127.0.0.1:8000/users/${id}`);

    }

    return(

        <>

            <div className={styles.container}>

                <div className={styles.list}>

                    <div className={styles.partOne}>

                        <p className={styles.title}>Categoria</p>

                        {category.map((item) => {

                            return(

                                <div className={styles.item_title}>
                                    {item.name}
                                </div>

                            );

                        })}

                    </div>

                    
                    <div className={styles.partTwo}>

                        <p className={styles.title}>Assinatura</p>

                        {signature.map((item) => {

                            return(

                                <div className={styles.item_title}>
                                    {item.nameSignature}
                                </div>

                            );

                        })}

                    </div>


                </div>
                
            </div>




            <div className={styles.container}>

                <div className={styles.list}>

                    <div className={styles.partOne}>

                        <p className={styles.title}>Usuários</p>

                        {users.map((item) => {

                            return(

                                <div className={styles.item_title}>
                                    {item.nameUser}
                                </div>

                            );

                        })}

                    </div>


                    <div className={styles.partTwo}>

                        <p className={styles.title}>Filmes</p>

                        {movies.map((item) => {

                            return(

                                <div className={styles.item_title}>
                                    {item.name}
                                </div>

                            );

                        })}

                    </div>


                </div>

            </div>



            <div className={styles.container}>

                <div className={styles.list}>

                    <div className={styles.partOne}>

                        <p className={styles.title}>Filmes Favoritos</p>

                        {favorite.map((item) => {

                            return(

                                <div className={styles.item_title}>
                                    Nome: {item.userFK} <br />
                                    Filme: {item.movieFK}
                                </div>

                            );

                        })}

                    </div>


                </div>

            </div>

        </>

        

    );

}

export default Read;