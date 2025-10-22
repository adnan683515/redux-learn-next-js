
import { Providers } from "@/Providers";
import "./globals.css";


export const metadata = {
  title: "My App",
  description: "Next.js + Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
