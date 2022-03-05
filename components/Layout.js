import Head from "next/head";
import Header from "./Header";

export default function LayOut({ children }) {
  return (
    <>
      <Head>
        <title>economy site</title>
      </Head>
      <Header />
      <main>{children}</main>
      <style jsx>{`
        main {
          text-align: center;
        }
      `}</style>
    </>
  );
}
