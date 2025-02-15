import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Navbar /> */}
    <ClerkProvider>
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
      </ClerkProvider>
    </>
  );
}
