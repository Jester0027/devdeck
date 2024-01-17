import "./globals.css";

import "driver.js/dist/driver.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
