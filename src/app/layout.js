"use client";

import "./globals.scss";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <meta
          http-equiv="cache-control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="0" />
      </head> */}
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
