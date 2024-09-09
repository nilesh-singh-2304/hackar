import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Navbar /> */}
    <NextTopLoader />
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <Component {...pageProps} />
    </>
  );
}
