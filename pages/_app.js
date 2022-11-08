import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux';
import '../styles/globals.css';
import {store} from "../store/store";

function MyApp({ Component, pageProps, session }) {
  return (
      <Provider store={store} >
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
      
  )
}

export default MyApp
