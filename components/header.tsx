'use client'

import Link from "next/link"
import { SocialCircles, WhatsappButton } from "./buttons"
import { useState } from "react"
import utils from "@/styles/utils.module.css"
import "@/styles/header.css"

type linkList = {name:string, path:string}[]
// V is used in the footer
export const navLinks:linkList = [
    {"name": "Home", "path": "/"},
    {"name": "Sobre a Liva", "path": "/sobre"},
    {"name": "Empreendimentos", "path": "/empreendimentos"},
    {"name": "Notícias", "path": "/news"},
    {"name": "Contato", "path": "#"},    
]

function generateLinks(input:linkList) {
    return input.map((value:{name:string, path:string}) => <Link className={utils.colorB} href={value.path}>{value.name}</Link>)
}


export default function Header() {
    const [expanded, setExpanded] = useState(0);

    return (
        <header>
            <nav className={utils.standardisedGrid}>
                {/* nav logo & mobile button*/}
                <a className={`${utils.span2ML} ${utils.span2M} ${utils.span2S}`} href="/">
                    <img width="auto" height={45} src="./images/liva.png" alt="Liva" />
                </a>
                <button className={`${utils.noneML}`} data-expanded={expanded} onClick={() => expanded == 0 ? setExpanded(1) : setExpanded(0)}>
                    <img style={{transition: "1s"}} src={expanded == 0 ? "/icons/hamburger.svg" : "/icons/x.svg"} alt="Navigation menu" />
                </button>

                {/*nav links*/}
                <div className={`mobileMenu inGrid ${utils.span10ML} ${utils.gridStart3ML} ${utils.subgrid}`}>
                    <div className={`navLinks ${utils.span6ML} ${utils.textUppercase} ${utils.sz14}`}> 
                        <>
                            {generateLinks(navLinks)}                
                        </>
                    </div> 


                    {/*social links*/}
                    <div className={`${utils.span1ML} ${utils.gridStart8ML}`}>
                        <p className={`${utils.noneML} ${utils.noneM}`}>Acompanhe nas redes</p>
                        <SocialCircles />  
                    </div>
                    <div className={`${utils.span2ML} ${utils.gridStart9ML}`}>
                        <WhatsappButton />                   
                    </div>
                </div>
            </nav>
        </header>
    )
}