import { AppProvider } from "@/contexts/App";
import { ThemeProvider } from "@/contexts/Theme";
import "@/styles/tailwind.css";
import "@/styles/app.scss";
import "@/styles/theme.scss";

export const metadata = {
  title: "Admin Dashboard",
  description: "Fully responsive and customizable admin dashboard",
  author: "mdmahikaishar <mahikaishar@gmail.com>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
