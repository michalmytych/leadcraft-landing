import localFont from "next/font/local";

export const nohemi = localFont({
  src: [
    { path: "./nohemi/Nohemi-Thin.woff2", weight: "100", style: "normal" },
    { path: "./nohemi/Nohemi-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./nohemi/Nohemi-Light.woff2", weight: "300", style: "normal" },
    { path: "./nohemi/Nohemi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./nohemi/Nohemi-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./nohemi/Nohemi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./nohemi/Nohemi-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./nohemi/Nohemi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const switzer = localFont({
  src: [
    { path: "./switzer/Switzer-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./switzer/Switzer-Light.woff2", weight: "300", style: "normal" },
    { path: "./switzer/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./switzer/Switzer-Italic.woff2", weight: "400", style: "italic" },
    { path: "./switzer/Switzer-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./switzer/Switzer-Bold.woff2", weight: "700", style: "normal" },
    { path: "./switzer/Switzer-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./switzer/Switzer-Black.woff2", weight: "900", style: "normal" },
    { path: "./switzer/Switzer-LightItalic.woff2", weight: "300", style: "italic" },
  ],
  variable: "--font-switzer",
  display: "swap",
});