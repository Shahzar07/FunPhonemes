import type { Metadata } from 'next';
import '@fontsource-variable/nunito';
import '@fontsource-variable/cairo';
import './globals.css';

const siteUrl = process.env.SITE_URL;
export const metadata: Metadata={...(siteUrl ? {metadataBase:new URL(siteUrl)} : {}),title:'FunPhonemes | Little sounds. Big discoveries.',description:'Playful English phonics, thoughtful resources, and guidance for Arabic-speaking families with children aged 4–7. Founded by Suzanne Simbawa in Jeddah.',openGraph:{title:'FunPhonemes',description:'Little sounds. Big discoveries.',...(siteUrl ? {images:['/images/suzanne-teaching.webp']} : {})}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}