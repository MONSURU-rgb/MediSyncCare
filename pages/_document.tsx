import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
