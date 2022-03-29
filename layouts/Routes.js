import Link from 'next/link';
import styles from './Header.module.scss';

function Routes(){

    return(
        
        <div className={styles.header}>

            <Link href="/Cadastrar">
                <a className={styles.link}>Cadastrar</a>
            </Link>

            <Link href="/Ler">
                <a className={styles.link}>Vizualizar</a>
            </Link>

            <Link href="/Cards">
                <a className={styles.link}>Movies</a>
            </Link>
        </div>
    );


}

export default Routes;