import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="w-screen h-screen bg-white">
        
        {children}
      </body>
    </html>
  );
}
