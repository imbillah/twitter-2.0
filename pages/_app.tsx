import { Layout, Modal } from "@/components";
import LoginModals from "@/components/modals/LoginModals";
import RegisterModals from "@/components/modals/RegisterModals";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RegisterModals />
      <LoginModals />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
