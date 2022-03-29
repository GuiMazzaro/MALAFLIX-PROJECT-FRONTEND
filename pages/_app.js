import '../styles/globals.css'
import Main from '../layouts/Main'

function MyApp({ Component, pageProps }) {
  
  return( 
    <Main> 
      <Component {...pageProps} />
    </Main>
    )

}

export default MyApp
