import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import '../../node_modules/video-react/dist/video-react.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
