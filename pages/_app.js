import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Provider } from "@/components/ui/provider";
import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
