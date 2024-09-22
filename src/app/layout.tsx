import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Estante Virtual</title>
        <link rel="icon" href="https://static.estantevirtual.com.br/webstore-navigation-view/L_ESTANTEVIRTUAL/images/favicon.ico" type="image/x-icon"></link>
      </head>
      <body className="w-screen h-screen bg-white">
        
        {children}
      </body>
    </html>
  );
}
