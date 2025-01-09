import { PresentationProps } from "../interfaces/generalInterfaces"
import viteTsTw from "../assets/viteTsTw.pdf"
import twDarkMode from "../assets/twDarkMode.pdf"
import rnExpoTsTw from "../assets/rnExpoTsTw.pdf"

export const presentationList : PresentationProps[] = [
  {
    path:"/viteTsTw",
    title:"Vite Ts e Tw",
    subtitle:"Começando com Vite Tailwind e Typescript",
    pdfFile:viteTsTw
  },   
  {
    path:"/twDarkMode",
    title:"TW Dark Mode",
    subtitle:"Duas formas de adicionar Dark Mode no Tailwind",
    pdfFile:twDarkMode
  },   
  {
    path:"/rnExpoTsTw",
    title:"RN = Expo + TypeScript + Tailwind",
    subtitle:"Como iniciar um aplicativo com React Native Typescript e Tailwind",
    pdfFile:rnExpoTsTw
  },   
]