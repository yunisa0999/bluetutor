import "./globals.css";

export const metadata = {
  title: "BlueTutor",
  description: "SDG Learning App – Developed by Eunice Medalla"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
