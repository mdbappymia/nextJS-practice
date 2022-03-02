import { Head, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="keyword" content="react next seo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
};

export default Document;
