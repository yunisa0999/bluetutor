import './globals.css';

export const metadata = {
  title: 'Bluetutor App',
  description: 'App description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
