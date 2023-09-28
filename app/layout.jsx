import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Footer from "./components/footer";
export const metadata = {
  title: {
    default: "Let's Learn Music | Classes By Ramen Sir",
    template: "%s | Let's Learn Music",
  },
  icons: {
    icon: "favicon.ico",
  },
  description:
    "Classs by Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S.",
  robots: "follow, index",
  applicationName: "Let's Learn Music",
  referrer: "origin-when-cross-origin",
  keywords: ["lets Learn music", "learn music", "classes by ramen paul"],
  authors: [{ name: "Dilip Kumar", url: "https://www.dilipmaurya.in" }],
  colorScheme: "system",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.letslearnmusic.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/profilecardimg.jpeg",
    description:
      "Classs by Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S.",
    title: "Let's Learn Music | Classes By Ramen Sir",
    url: "https://www.letslearnmusic.in",
    siteName: "Let's Learn Music | Classes By Ramen Sir",
    images: [
      {
        url: "/profilecardimg.jpeg",
        width: 800,
        height: 600,
      },
      {
        url: "/profilecardimg.jpeg",
        width: 1800,
        height: 1600,
        alt: "Let's Learn Music Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
