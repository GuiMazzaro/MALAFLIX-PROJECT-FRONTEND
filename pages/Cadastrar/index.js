import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import styles from "../_css/cadastrar.module.css";

function Create(){

    const [category, setCategory] = useState([])
    const [signature, setSignature] = useState([])
    const [users, setUsers] = useState([])
    const [movies, setMovies] = useState([])

    const [selectCategory,  setSelectCategory] = useState("");
    const [selectSignature,  setSelectSignature] = useState("");
    const [selectUser,  setSelectUser] = useState("");
    const [selectMovies,  setSelectMovies] = useState("");

    const [nameMovie, setNameMovie] = useState("");

    const [nameUser, setNameUser] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [foneUser, setFoneUser] = useState("");
    const [selectPlan,  setSelectPlan] = useState("");

    const [nameFavorite, setNameFavorite] = useState("");
    const [movieFavorite, setMovieFavorite] = useState("");

    useEffect( async () =>{

        const responseCategory = await fetch(`http://127.0.0.1:8000/category/`);
        const dataCategory = await responseCategory.json();

        setCategory(dataCategory);

        const responseSignature = await fetch(`http://127.0.0.1:8000/signature/`);
        const dataSignature = await responseSignature.json();

        setSignature(dataSignature);

        const responseUsers = await fetch(`http://127.0.0.1:8000/users/`);
        const dataUsers = await responseUsers.json();

        setUsers(dataUsers);

        const responseMovies = await fetch(`http://127.0.0.1:8000/movies/`);
        const dataMovies = await responseMovies.json();

        setMovies(dataMovies);

    }, []);

    function postMovies(){

        fetch('http://localhost:8000/movies/', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify([

                {
                    name: nameMovie.target.value,
                    categoryFK: selectCategory.id
                }
    
            ])
        }).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error))

    }

    function postUser(){

        fetch('http://localhost:8000/users/', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify([

                {
                    nameUser: nameUser.target.value,
                    emailUser: emailUser.target.value,
                    foneUser: foneUser.target.value,
                    statusUser: true,
                    signatureFK: selectPlan.id,
                }
    
            ])
        }).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error))

    }

    function postFavorite(){

        fetch('http://localhost:8000/favorite/', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify([

                {
                    movieFK: selectMovies.id,
                    userFK: selectUser.id
                }
    
            ])
        }).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(error))

    }

    return(

        <>
        
        <div className={styles.container}>

            <form action="" method="post" className={styles.form}>

                <p className={styles.title}>Cadastrar Filmes</p>

                <div className={styles.container_data}>
                    <label for="nome_filme" className={styles.label}>Nome do Filme:</label>
                    <input type="text" id="nome_filme" name="nome_filme" className={styles.input} value={nameMovie.value} onChange={(e) => (setNameMovie(e))}/>
                </div>

                <label for="select" className={styles.label}>Selecione a categoria:</label>


                <div className={styles.container_data}>

                    <Dropdown 
                        id="name"
                        name="name"
                        optionLabel="name"
                        options={category}
                        value={selectCategory}
                        onChange={ (e)=> (setSelectCategory(e.value), console.log(e.value)) }
                    />

                </div>

                <div className={styles.container_btns}>

                    <input type="submit" label="Enviar" className={styles.btnSend} onClick={(e)=>{ e.preventDefault(); postMovies() }}/>
                    <input type="reset" className={styles.btnReset}/>

                </div>

            </form>
        
        </div>

        <div className={styles.container_create}>

        <form action="" method="post" className={styles.form}>

            <p className={styles.title}>Cadastrar Categorias</p>

            <div className={styles.container_data}>
                <label for="nome_categoria" className={styles.label}>Nome da Categoria:</label>
                <input type="text" id="nome_categoria" name="nome_categoria" className={styles.input}/>
            </div>

            <div className={styles.container_btns}>

                <input type="submit" label="Enviar" className={styles.btnSend}/>
                <input type="reset" className={styles.btnReset}/>

            </div>


            </form>
           
        </div>


        <div className={styles.container_create}>

        <form action="" method="post" className={styles.form}>

            <p className={styles.title}>Cadastrar Assinaturas</p>

            <div className={styles.container_data}>
                <label for="nome_assinatura" className={styles.label}>Nome da Assinatura:</label>
                <input type="text" id="nome_assinatura" name="nome_assinatura" className={styles.input}/>
            </div>

            <div className={styles.container_data}>
                <label for="valor_assinatura" className={styles.label}>Valor da Assinatura:</label>
                <input type="number" id="valor_assinatura" name="valor_assinatura" className={styles.input}/>
            </div>

            <div className={styles.container_btns}>

                <input type="submit" label="Enviar" className={styles.btnSend}/>
                <input type="reset" className={styles.btnReset}/>

            </div>


            </form>
           
        </div>


        <div className={styles.container_create}>

        <form action="" method="post" className={styles.form}>

            <p className={styles.title}>Cadastrar Usuários</p>

            <div className={styles.container_data}>
                <label for="nome_usuario" className={styles.label}>Nome do Usuário:</label>
                <input type="text" id="nome_usuario" name="nome_usuario" className={styles.input} value={nameUser.value} onChange={(e) => (setNameUser(e))}/>
            </div>

            <div className={styles.container_data}>
                <label for="email_usuario" className={styles.label}>Email do Usuário:</label>
                <input type="email" id="email_usuario" name="email_usuario" className={styles.input} value={emailUser.value} onChange={(e) => (setEmailUser(e))}/>
            </div>

            <div className={styles.container_data}>
                <label for="fone_usuario" className={styles.label}>Telefone do Usuário:</label>
                <input type="text" id="fone_usuario" name="fone_usuario" className={styles.input} value={foneUser.value} onChange={(e) => (setFoneUser(e))}/>
            </div>

            <div className={styles.container_data}>

            <label for="plan_usuario" className={styles.label}>Tipo de Plano:</label>

                    <Dropdown 
                        id="plan_usuario"
                        name="nameSignature"
                        optionLabel="nameSignature"
                        options={signature}
                        value={selectPlan}
                        onChange={ (e)=> (setSelectPlan(e.value), console.log(e.value)) }
                    />

                </div>

            <div className={styles.container_btns}>

                <input type="submit" label="Enviar" className={styles.btnSend} onClick={(e)=>{ e.preventDefault(); postUser() }}/>
                <input type="reset" className={styles.btnReset}/>

            </div>


            </form>
           
        </div>


        <div className={styles.container_create}>

        <form action="" method="post" className={styles.form}>

            <p className={styles.title}>Cadastrar Filmes Favoritos</p>

            <div className={styles.container_data}>
                <label for="nome_user" className={styles.label}>Nome do Usuário:</label>

                <Dropdown 
                        id="nome_user"
                        name="nameUser"
                        optionLabel="nameUser"
                        options={users}
                        value={selectUser}
                        onChange={ (e)=> (setSelectUser(e.value), console.log(e.value)) }
                />
                
            </div>

            <div className={styles.container_data}>
                <label for="nome_user" className={styles.label}>Nome do Filme:</label>

                <Dropdown 
                        id="nome_user"
                        name="name"
                        optionLabel="name"
                        options={movies}
                        value={selectMovies}
                        onChange={ (e)=> (setSelectMovies(e.value), console.log(e.value)) }
                />
                
            </div>

            <div className={styles.container_btns}>

                <input type="submit" label="Enviar" className={styles.btnSend} onClick={(e)=>{ e.preventDefault(); postFavorite() }}/>
                <input type="reset" className={styles.btnReset}/>

            </div>


            </form>
           
        </div>

        </>
        
    );


}

export default Create;