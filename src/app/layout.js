import "./globals.css";

export const metadata = {
  title: "Carpas MM",
  description: "Alquiler de carpas y gazebos MM para eventops al aire libre",
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
