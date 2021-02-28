// This is the 'root' file that react will render
import '../styles/global.css';
function MyApp({ Component, pageProps }) {

  return (
      <Component {...pageProps} />
  )
}

export default MyApp
