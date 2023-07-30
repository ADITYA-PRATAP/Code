import '@/styles/globals.css'
import Layout from './Layout'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
  <div id="cart-root"></div>
  <div id="modal-root"></div>
   <Component {...pageProps} />
    </Layout>
   );
}
