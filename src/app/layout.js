import "./globals.css";

export const metadata = {
  title: "Carpas MM",
  description: "Alquiler de carpas para eventos al aire libre en Mendoza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
